import Form from "./components/form/Form";
import Popup from "./components/popup/Popup";
import Result from "./components/result/Result";
import Main from "./components/main/Main";
import { InputValueProvider } from "./providers/input.provider";
import "./styles/normalize.css";
import "./styles/App.css";

function App() {
  return (
    <div>
      <InputValueProvider>
        <Main>
          <Form />
          <Result />
        </Main>
        <Popup />
      </InputValueProvider>
    </div>
  );
}

export default App;
