import { observer } from "mobx-react";
import { LetterStoreProps } from "../../interfaces/interfaces";
import LetterService from "../../services/letter.service";
import { Select } from "./Queries.styled";

const Queries = observer(
  ({ store: { letter, pattern, setPattern } }: LetterStoreProps) => {
    const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
      setPattern(e.target.value);
      await LetterService(e.target.value);
    };

    const isEmptyStr = letter.length > 0 ? false : true;

    return (
      <Select disabled={isEmptyStr} onChange={handleChange} value={pattern}>
        <option disabled value="">
          Select query
        </option>
        <option value={"^" + letter}>
          How many words start with the letter {letter}?
        </option>
        <option value={letter}>
          How many times does the letter {letter} appear in the dictionary?
        </option>
        <option value={letter + "$"}>
          How many words end with the letter {letter}?
        </option>
        <option value={letter + letter}>
          How many words have the letter {letter} repeated in conjunction?
        </option>
      </Select>
    );
  }
);

export default Queries;
