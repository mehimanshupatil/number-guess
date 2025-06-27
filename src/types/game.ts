export interface GameState {
  currentSheet: number;
  totalSheets: number;
  userAnswers: boolean[];
  isComplete: boolean;
  guessedNumber: number | null;
}

export interface Sheet {
  id: number;
  title: string;
  numbers: number[];
  binaryValue: number;
}