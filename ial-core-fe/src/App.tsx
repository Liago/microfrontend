import { Typography, Button, Divider } from "antd";
import { Suspense, lazy } from "react";
import ErrorBoundary from "./components/ErrorsApp";
import LoadingSpinner from "./components/LoadingSpinner";

const LoginForm = lazy(() => import("login-form-app/LoginForm"));
const Table = lazy(() => import("table-app/Table"));

export const IalCoreFe = () => {
  const onClickHandler = () => {
    console.log("[IAL-CORE-FE] click!");
  };

  const { Title } = Typography;

  return (
    <div>
      <Title level={2}>h2. Ant Design</Title>
      <h1 className="text- p-b pb pb-8 text-red-400">Main App</h1>
      <Divider />
      <Title level={1}>h1. IAL SVG FE </Title>
      <Divider />
      <Suspense fallback={<LoadingSpinner />}>
        <LoginForm lo otherProp="PEANUTS!" onSubmitHandler={onClickHandler} />
      </Suspense>
      <Divider />
      <Title level={1}>h1. IAL GET FE </Title>
      <Divider />
      <Suspense fallback={<LoadingSpinner />}>
        <Table />
      </Suspense>
    </div>
  );
};

const App = () => {
  return (
    <ErrorBoundary>
      <IalCoreFe />
    </ErrorBoundary>
  );
};

export default App;
