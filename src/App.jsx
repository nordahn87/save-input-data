import Form from "./components/form/Form";
import Popup from "./components/popup/Popup";
import Result from "./components/result/Result";
import "./styles/normalize.css";
import "./styles/App.css";
import Main from "./components/main/Main";

function App() {
  return (
    <div>
      <Main>
        <Form />
        <Result />
      </Main>
      <Popup />
    </div>
  );
}

export default App;
