import store from "../../stores/Letter.store";
import SearchInput from "../LetterInput/LetterInput";
import Queries from "../Select/Queries";
import Title from "../Title/Title";
import { LetterQuerySelect } from "./inputAndSelect.styled";

const InputAndSelect = () => {
  return (
    <LetterQuerySelect>
      <Title />
      <SearchInput store={store} />
      <Queries store={store} />
    </LetterQuerySelect>
  );
};
export default InputAndSelect;
