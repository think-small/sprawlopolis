import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { GameTypes } from '../models/contracts/gametype';
import { GameManagerService } from '../services/game-manager/game-manager.service';

@Component({
  selector: 'app-menu-dialog',
  templateUrl: './menu-dialog.component.html',
  styleUrls: ['./menu-dialog.component.scss']
})
export class MenuDialogComponent implements OnInit, OnDestroy {
  public allGames: string[] = this.gameManager.allGames;
  public subGameSelection!: Subscription;
  public gameSelection: FormControl = new FormControl();

  constructor(
    public dialogRef: MatDialogRef<MenuDialogComponent>,
    private readonly gameManager: GameManagerService) { }

  ngOnInit(): void {
    this.subGameSelection = this.gameSelection.valueChanges.subscribe((game: GameTypes) => {
      this.gameManager.setSelectedGameType(game);
      this.dialogRef.close();
    });
  }

  ngOnDestroy(): void {
    this.subGameSelection.unsubscribe();
  }
}
