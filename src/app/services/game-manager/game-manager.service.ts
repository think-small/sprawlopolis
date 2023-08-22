import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { Game } from 'src/app/models/contracts/game.interface';
import { GAME_TYPES, GameTypes } from 'src/app/models/contracts/gametype';
import { Naturopolis } from 'src/app/models/naturopolis/naturopolis.model';
import { Sprawlopolis } from 'src/app/models/sprawlopolis/sprawlopolis.model';
import { ScoreInput } from 'src/app/models/contracts/score-input';

@Injectable({
  providedIn: 'root'
})
export class GameManagerService {

  private sbjSelectedGameType$: Subject<GameTypes> = new Subject<GameTypes>();
  private selectedGameType$: Observable<GameTypes> = this.sbjSelectedGameType$.asObservable();

  private sbjCurrentScores$: BehaviorSubject<ScoreInput[]> = new BehaviorSubject<ScoreInput[]>([]);
  public currentScore$: Observable<number> = this.sbjCurrentScores$
    .pipe(
      map((scores: ScoreInput[]) => scores.reduce((acc: number, curr: ScoreInput) => acc += curr.score, 0))
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

  constructor() {
    GAME_TYPES.forEach(gameType => this.allGames.push(gameType));
  }

  public setSelectedGameType(gameType: GameTypes): void {
    this.sbjSelectedGameType$.next(gameType);
  }

  public updateScore(score: ScoreInput) {
    let updatedScores: ScoreInput[];
    const foundScore = this.sbjCurrentScores$.value.find(s => s.id === score.id);

    if (foundScore) {
      foundScore.score = score.score;
      updatedScores = [...this.sbjCurrentScores$.value.filter(s => s.id !== score.id), foundScore];
    }
    else {
      updatedScores = [...this.sbjCurrentScores$.value, score];
    }

    this.sbjCurrentScores$.next(updatedScores);
  }
}
