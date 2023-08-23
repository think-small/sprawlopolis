import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Block } from '../models/contracts/block.interface';
import { FormControl, FormControlStatus, Validators } from '@angular/forms';
import { Subscription, debounceTime, distinctUntilChanged, combineLatest } from 'rxjs';
import { GameManagerService } from '../services/game-manager/game-manager.service';
import { v4 as uuid } from 'uuid';

const ZERO = 0;

@Component({
  selector: 'app-score-input',
  templateUrl: './score-input.component.html',
  styleUrls: ['./score-input.component.scss']
})
export class ScoreInputComponent implements OnInit, OnDestroy {
  @Input() block!: Block;
  @Input() isPositive!: boolean;

  public scoreInput!: FormControl;
  private subScoreInput!: Subscription;
  private id: string;

  constructor(private readonly gameManager: GameManagerService) {
    this.id = uuid();
  }

  ngOnInit(): void {
    const validators = [];

    if (this.isPositive) {
      validators.push(Validators.min(ZERO));
    }
    else {
      validators.push(Validators.max(ZERO));
    }

    this.scoreInput = new FormControl(ZERO, validators);

    this.subScoreInput =
      combineLatest([
        this.scoreInput.statusChanges,
        this.scoreInput.valueChanges.pipe(debounceTime(500), distinctUntilChanged())
      ])
        .subscribe(([_, val]: [FormControlStatus, number]) => {
          const score = { id: this.id, score: this.calculateScore(val) }
          this.gameManager.updateScore(score);
        });
  }

  ngOnDestroy(): void {
    this.subScoreInput.unsubscribe();
  }

  private calculateScore(val: number): number {
    let output: number;

    if (this.isPositive && val >= ZERO ||
      this.isPositive === false && val <= ZERO) {
      output = val;
    }
    else {
      output = ZERO;
    }

    return output;
  }

}
