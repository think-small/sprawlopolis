import { Block } from "../contracts/block.interface";
import { Card } from "../contracts/card.interface";

export class Sprawlopolis {
  public name: string = "Sprawlopolis";
  public backgroundImgPath: string = "../../../assets/backgrounds/sprawlopolis.jpg";
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
      name: "Go Green",
      hasPositiveScoreCondition: true,
      hasNegativeScoreCondition: true,
      finalScore: 3
    });

    cards.push({
      name: "Morning Commute",
      hasPositiveScoreCondition: true,
      hasNegativeScoreCondition: false,
      finalScore: 16
    });

    cards.push({
      name: "Superhighway",
      hasPositiveScoreCondition: true,
      hasNegativeScoreCondition: false,
      finalScore: 12
    });

    cards.push({
      name: "The Strip",
      hasPositiveScoreCondition: true,
      hasNegativeScoreCondition: false,
      finalScore: 10
    });

    cards.push({
      name: "Sprawlopolis",
      hasPositiveScoreCondition: true,
      hasNegativeScoreCondition: false,
      finalScore: 18
    });

    cards.push({
      name: "Looping Lanes",
      hasPositiveScoreCondition: true,
      hasNegativeScoreCondition: false,
      finalScore: 14
    });

    cards.push({
      name: "Block Party",
      hasPositiveScoreCondition: true,
      hasNegativeScoreCondition: true,
      finalScore: 4
    });

    cards.push({
      name: "The 'Burbs",
      hasPositiveScoreCondition: true,
      hasNegativeScoreCondition: true,
      finalScore: 8
    });

    cards.push({
      name: "Stacks and Scrapers",
      hasPositiveScoreCondition: true,
      hasNegativeScoreCondition: false,
      finalScore: 5
    });

    cards.push({
      name: "Concrete Jungle",
      hasPositiveScoreCondition: true,
      hasNegativeScoreCondition: false,
      finalScore: 9
    });

    cards.push({
      name: "Skid Row",
      hasPositiveScoreCondition: true,
      hasNegativeScoreCondition: false,
      finalScore: 15
    });

    cards.push({
      name: "Park Hopping",
      hasPositiveScoreCondition: true,
      hasNegativeScoreCondition: false,
      finalScore: 13
    });

    cards.push({
      name: "The Outskirts",
      hasPositiveScoreCondition: true,
      hasNegativeScoreCondition: true,
      finalScore: 1
    });

    cards.push({
      name: "Mini Marts",
      hasPositiveScoreCondition: true,
      hasNegativeScoreCondition: false,
      finalScore: 11
    });

    cards.push({
      name: "Tourist Traps",
      hasPositiveScoreCondition: true,
      hasNegativeScoreCondition: false,
      finalScore: 17
    });

    cards.push({
      name: "Master Planned",
      hasPositiveScoreCondition: true,
      hasNegativeScoreCondition: true,
      finalScore: 6
    });

    cards.push({
      name: "Bloom Boom",
      hasPositiveScoreCondition: true,
      hasNegativeScoreCondition: true,
      finalScore: 2
    });

    cards.push({
      name: "Central Perks",
      hasPositiveScoreCondition: true,
      hasNegativeScoreCondition: true,
      finalScore: 7
    });

    return cards;
  }

  private createBlockTypes(): Block[] {
    const blockTypes: Block[] = [];

    blockTypes.push({
      name: "Residential",
      iconPath: ""
    });

    blockTypes.push({
      name: "Industrial",
      iconPath: "../../../assets/icons/industrial.png",
    });

    blockTypes.push({
      name: "Park",
      iconPath: "../../../assets/icons/park.png"
    });

    blockTypes.push({
      name: "Commercial",
      iconPath: "../../../assets/icons/commercial.png"
    });

    blockTypes.push({
      name: "Road",
      iconPath: ""
    })

    return blockTypes;
  }

}
