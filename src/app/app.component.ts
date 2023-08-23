import { Component, OnInit } from '@angular/core';
import { GameManagerService } from './services/game-manager/game-manager.service';
import { Observable } from 'rxjs';
import { Game } from './models/contracts/game.interface';
import { MatDialog } from '@angular/material/dialog';
import { MenuDialogComponent } from './menu-dialog/menu-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public gameSelection$!: Observable<Game>;

  constructor(
    private readonly gameManager: GameManagerService,
    private menuDialog: MatDialog) { }

  ngOnInit(): void {
    this.gameSelection$ = this.gameManager.selectedGame$;
  }

  public openMenuDialog(): void {
    this.menuDialog.open(MenuDialogComponent);
  }
}
