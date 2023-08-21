import { Component, OnInit } from '@angular/core';
import { GameManagerService } from '../services/game-manager/game-manager.service';
import { Observable } from 'rxjs';
import { Game } from '../models/contracts/game.interface';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  public selectedGame$!: Observable<Game>;
  public currentScore$!: Observable<number>;

  constructor(private readonly gameManager: GameManagerService) { }

  ngOnInit(): void {
    this.selectedGame$ = this.gameManager.selectedGame$;
    this.currentScore$ = this.gameManager.currentScore$;
  }

}
