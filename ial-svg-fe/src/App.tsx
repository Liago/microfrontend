import "./App.css";
import LoginForm from "./components/LoginForm";

const App = () => {
  const onSubmit = () => {
    console.log("[IAL-SVG-FE]click inside the component");
  };
  const otherProp = "testme";
  return (
    <>
      <h1>IAL SVG FE</h1>
      <LoginForm onSubmitHandler={onSubmit} otherProp={otherProp} />
    </>
  );
};

export default App;
