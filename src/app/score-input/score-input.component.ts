import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Block } from '../models/contracts/block.interface';
import { FormControl } from '@angular/forms';
import { Subscription, debounceTime, distinctUntilChanged, map } from 'rxjs';
import { GameManagerService } from '../services/game-manager/game-manager.service';
import { v4 as uuid } from 'uuid';
import { ScoreInput } from '../models/contracts/score-input';

@Component({
  selector: 'app-score-input',
  templateUrl: './score-input.component.html',
  styleUrls: ['./score-input.component.scss']
})
export class ScoreInputComponent implements OnInit, OnDestroy {
  @Input() block!: Block;
  @Input() isPositive!: boolean;

  public scoreInput = new FormControl();
  private subScoreInput!: Subscription;
  private id: string;

  constructor(private readonly gameManager: GameManagerService) {
    this.id = uuid();
  }

  ngOnInit(): void {
    this.subScoreInput = this.scoreInput.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        map((val: number) => ({ id: this.id, score: this.calculateScore(val) }))
      )
      .subscribe((score: ScoreInput) => {
        this.gameManager.updateScore(score);
      });
  }

  ngOnDestroy(): void {
    this.subScoreInput.unsubscribe();
  }

  private calculateScore(val: number): number {
    let output: number;

    if (this.isPositive && val >= 0 ||
      this.isPositive === false && val <= 0) {
      output = val;
    }
    else {
      output = 0;
    }

    return output;
  }

}
