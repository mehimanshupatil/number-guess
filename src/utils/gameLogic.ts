import { Sheet } from '../types/game';

const MAX_NUMBER = 100; // Support numbers 1-100
const TOTAL_SHEETS = 7; // Need 7 sheets for numbers up to 100 (2^7 = 128)

export const generateSheets = (): Sheet[] => {
  const sheets: Sheet[] = [];
  
  for (let sheetIndex = 0; sheetIndex < TOTAL_SHEETS; sheetIndex++) {
    const binaryValue = Math.pow(2, sheetIndex);
    const numbers: number[] = [];
    
    // Generate numbers for this sheet based on binary representation
    for (let num = 1; num <= MAX_NUMBER; num++) {
      if (num & binaryValue) {
        numbers.push(num);
      }
    }
    
    sheets.push({
      id: sheetIndex + 1,
      title: `Sheet ${sheetIndex + 1}`,
      numbers,
      binaryValue
    });
  }
  
  return sheets;
};

export const calculateGuessedNumber = (userAnswers: boolean[], sheets: Sheet[]): number => {
  let result = 0;
  userAnswers.forEach((answer, index) => {
    if (answer && sheets[index]) {
      result += sheets[index].binaryValue;
    }
  });
  return result;
};

export const getTotalSheets = (): number => TOTAL_SHEETS;