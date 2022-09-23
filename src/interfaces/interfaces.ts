export interface LetterInterface {
  letter: string;
  pattern: string;
  result: number | null;
  setLetter: (letter: string) => void;
  setPattern: (pattern: string) => void;
  setResult: (result: number | null) => void;
}

export interface LetterStoreProps {
  store: LetterInterface;
}
