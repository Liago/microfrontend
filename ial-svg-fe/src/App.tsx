import { Typography } from "antd";
import "./App.css";
import LoginForm from "./components/LoginForm";

const App = () => {
  const { Title } = Typography;
  const onSubmit = () => {
    console.log("[IAL-SVG-FE]click inside the component");
  };
  const otherProp = "testme";
  return (
    <>
      <h1 className="text-lg text-red-500">IAL SVG FE</h1>
      <Title level={2}>h2. Ant Design</Title>
      <LoginForm onSubmitHandler={onSubmit} otherProp={otherProp} />
    </>
  );
};

export default App;
