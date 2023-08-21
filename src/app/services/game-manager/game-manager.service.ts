import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map, scan } from 'rxjs';
import { Game } from 'src/app/models/contracts/game.interface';
import { GAME_TYPES, GameTypes } from 'src/app/models/contracts/gametype';
import { Naturopolis } from 'src/app/models/naturopolis/naturopolis.model';
import { Sprawlopolis } from 'src/app/models/sprawlopolis/sprawlopolis.model';
import { ScoreCalculatorService } from '../score-calculator/score-calculator.service';

@Injectable({
  providedIn: 'root'
})
export class GameManagerService {

  private sbjSelectedGameType$: Subject<GameTypes> = new Subject<GameTypes>();
  private selectedGameType$: Observable<GameTypes> = this.sbjSelectedGameType$.asObservable();

  private sbjCurrentScores$: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
  public currentScore$: Observable<number> = this.sbjCurrentScores$
    .pipe(
      map((scores: number[]) => scores.reduce((acc: number, curr: number) => acc += curr, 0))
    );

  public allGames: string[] = [];

  public selectedGame$: Observable<Game> =
    this.selectedGameType$.pipe(
      map((gameType: GameTypes) => {
        let game: Game;

        if (gameType == "Sprawlopolis") {
          game = new Sprawlopolis();
        }
        else {
          game = new Naturopolis();
        }

        return game;
      })
    );

  constructor(private readonly calculator: ScoreCalculatorService) {
    GAME_TYPES.forEach(gameType => this.allGames.push(gameType));
  }

  public setSelectedGameType(gameType: GameTypes): void {
    this.sbjSelectedGameType$.next(gameType);
  }

  public appendScore(score: number) {
    const updatedScores: number[] = [...this.sbjCurrentScores$.value, score];
    this.sbjCurrentScores$.next(updatedScores); 
  }
}
