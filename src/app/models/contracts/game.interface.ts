import { Block } from "./block.interface";
import { Card } from "./card.interface";

export interface Game {
  name: string;
  backgroundImgPath: string;
  overlayColor: string;
  cards: Card[];
  blockTypes: Block[];
  winConditionCount: number;
}
