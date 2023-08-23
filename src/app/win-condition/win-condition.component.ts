import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Subscription } from 'rxjs';
import { Card } from '../models/contracts/card.interface';
import { GameManagerService } from '../services/game-manager/game-manager.service';
import { v4 as uuid } from 'uuid';
import { ScoreInput } from '../models/contracts/score-input';

@Component({
  selector: 'app-win-condition',
  templateUrl: './win-condition.component.html',
  styleUrls: ['./win-condition.component.scss']
})
export class WinConditionComponent implements OnInit, OnDestroy {
  @Input() cards!: Card[];
  public cardSelector: FormControl = new FormControl();
  public subCardSelector!: Subscription;
  public subRenderTrigger!: Subscription;
  public id!: string;

  constructor(private readonly gameManager: GameManagerService) { }

  ngOnInit(): void {
    this.id = uuid();

    // HACK - BS - accounting for type Card | null is required due to the need to reset the cardSelector
    //             FormControl from inside the renderTrigger$ subscription whenever the user changes
    //             the selected game.
    this.subCardSelector = this.cardSelector.valueChanges.
      pipe(map((val: Card | null) => ({ id: this.id, score: val?.finalScore ?? 0 })))
      .subscribe((score: ScoreInput) => this.gameManager.updateWinCondition(score));

    this.subRenderTrigger = this.gameManager.renderTrigger$.subscribe(() => this.cardSelector.reset());
  }

  ngOnDestroy(): void {
    this.subCardSelector.unsubscribe();
    this.subRenderTrigger.unsubscribe();
  }

}
