import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Block } from '../models/contracts/block.interface';
import { FormControl } from '@angular/forms';
import { Subscription, debounceTime } from 'rxjs';
import { GameManagerService } from '../services/game-manager/game-manager.service';

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

  constructor(private readonly gameManager: GameManagerService) { }
  
  ngOnInit(): void {
    this.subScoreInput = this.scoreInput.valueChanges
      .pipe(debounceTime(500))
      .subscribe((score: number) => {
        const multiplier = this.isPositive ? 1 : -1;
        this.gameManager.appendScore(score * multiplier);
      });
  }

  ngOnDestroy(): void {
    this.subScoreInput.unsubscribe();
  }

}
