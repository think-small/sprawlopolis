import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameManagerService } from './services/game-manager/game-manager.service';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { GameTypes } from './models/contracts/gametype';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public allGames: string[] = this.gameManager.allGames;
  public gameSelection: FormControl = new FormControl();
  private subGameSelection!: Subscription;
  
  constructor(private readonly gameManager: GameManagerService) { }

  ngOnInit(): void {
    this.subGameSelection = this.gameSelection.valueChanges.subscribe((game: GameTypes) => {
      this.gameManager.setSelectedGameType(game);
    });
  }

  ngOnDestroy(): void {
    this.subGameSelection.unsubscribe();
  }
}
