import { makeAutoObservable } from "mobx";

class LetterStore {
  letter: string = "";
  pattern: string = "";
  result: number | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setLetter = (letter: string) => {
    this.letter = letter;
  };

  setPattern = (pattern: string) => {
    this.pattern = pattern;
  };

  setResult = (result: number | null) => {
    this.result = result;
  };
}

const store = new LetterStore();
export default store;
