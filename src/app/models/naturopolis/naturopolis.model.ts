import { Block } from "../contracts/block.interface";
import { Card } from "../contracts/card.interface";
import { Game } from "../contracts/game.interface";

export class Naturopolis implements Game {
  public name: string = "Naturopolis";
  public backgroundImgPath: string = "../../../assets/backgrounds/naturopolis.jpg";
  public cards: Card[];
  public blockTypes: Block[];
  public overlayColor: string;
  public winConditionCount: number;

  constructor() {
    this.cards = this.createCards();
    this.blockTypes = this.createBlockTypes();
    this.overlayColor = "#ffff";
    this.winConditionCount = 3;
  }

  private createCards(): Card[] {
    const cards: Card[] = [];

    cards.push({
      name: "Driving' Daisies",
      hasPositiveScoreCondition: true,
      hasNegativeScoreCondition: true,
      finalScore: 6
    });

    cards.push({
      name: "Straight and Narrow",
      hasPositiveScoreCondition: true,
      hasNegativeScoreCondition: false,
      finalScore: 5
    });

    cards.push({
      name: "Lake Mistakes",
      hasPositiveScoreCondition: true,
      hasNegativeScoreCondition: true,
      finalScore: 2
    });

    cards.push({
      name: "Summit Up",
      hasPositiveScoreCondition: true,
      hasNegativeScoreCondition: false,
      finalScore: 17
    });

    cards.push({
      name: "Trees in Threes",
      hasPositiveScoreCondition: true,
      hasNegativeScoreCondition: true,
      finalScore: 1
    });

    cards.push({
      name: "Patchwork Park",
      hasPositiveScoreCondition: true,
      hasNegativeScoreCondition: false,
      finalScore: 9
    });

    cards.push({
      name: "Waterways and Means",
      hasPositiveScoreCondition: true,
      hasNegativeScoreCondition: false,
      finalScore: 8
    });

    cards.push({
      name: "Natural Selection",
      hasPositiveScoreCondition: true,
      hasNegativeScoreCondition: true,
      finalScore: 4
    });

    cards.push({
      name: "Bigfoot Country",
      hasPositiveScoreCondition: true,
      hasNegativeScoreCondition: true,
      finalScore: 13
    });

    cards.push({
      name: "Naturopolis",
      hasPositiveScoreCondition: true,
      hasNegativeScoreCondition: false,
      finalScore: 18
    });

    cards.push({
      name: "Run Forest Run",
      hasPositiveScoreCondition: true,
      hasNegativeScoreCondition: false,
      finalScore: 11
    });

    cards.push({
      name: "Happy Campers",
      hasPositiveScoreCondition: true,
      hasNegativeScoreCondition: false,
      finalScore: 12
    });

    cards.push({
      name: "Twin Peaks",
      hasPositiveScoreCondition: true,
      hasNegativeScoreCondition: false,
      finalScore: 10
    });

    cards.push({
      name: "Sniff or Swim",
      hasPositiveScoreCondition: true,
      hasNegativeScoreCondition: true,
      finalScore: 14
    });

    cards.push({
      name: "Dream Streams",
      hasPositiveScoreCondition: true,
      hasNegativeScoreCondition: false,
      finalScore: 16
    });

    cards.push({
      name: "Impressive Range",
      hasPositiveScoreCondition: true,
      hasNegativeScoreCondition: false,
      finalScore: 15
    });

    cards.push({
      name: "Second Nature",
      hasPositiveScoreCondition: true,
      hasNegativeScoreCondition: false,
      finalScore: 7
    });

    cards.push({
      name: "A River Runs Through It",
      hasPositiveScoreCondition: true,
      hasNegativeScoreCondition: true,
      finalScore: 3
    });

    return cards;
  }

  private createBlockTypes(): Block[] {
    const blockTypes: Block[] = [];

    blockTypes.push({
      name: "Meadow",
      iconPath: "../../../assets/icons/meadow.png"
    });

    blockTypes.push({
      name: "Mountain",
      iconPath: "../../../assets/icons/mountain.png"
    });

    blockTypes.push({
      name: "Forest",
      iconPath: "../../../assets/icons/forest.png"
    });

    blockTypes.push({
      name: "Lake",
      iconPath: "../../../assets/icons/lake.png"
    });

    blockTypes.push({
      name: "Road",
      iconPath: ""
    });

    return blockTypes;
  }
}
