import "./App.css";
import Chart from "./components/Chart/Chart";
import store from "./stores/Letter.store";
import { AppDiv } from "./App.styled";
import InputAndSelect from "./components/InputAndSelect/InputAndSelect";

function App() {
  return (
    <AppDiv>
      <InputAndSelect />
      <Chart store={store} />
    </AppDiv>
  );
}

export default App;
