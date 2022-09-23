import { Input } from "./LetterInput.styled";
import { observer } from "mobx-react";
import { LetterStoreProps } from "../../interfaces/interfaces";

const SearchInput = observer(
  ({
    store: { letter, setLetter, setPattern, setResult },
  }: LetterStoreProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (e.target.value.match("^[a-z]*$") && value.length <= 1) {
        setLetter(value);
        isEmpty(value);
      }
    };

    const isEmpty = (val: string) => {
      if (val.length === 0) {
        setPattern("");
        setResult(null);
      }
    };

    return (
      <div>
        <Input
          type="text"
          name="letter"
          value={letter}
          placeholder="Enter a lowercase letter"
          onChange={handleChange}
        />
      </div>
    );
  }
);

export default SearchInput;
