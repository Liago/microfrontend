import { Typography } from "antd";
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
      <Suspense fallback={<LoadingSpinner />}>
        <LoginForm otherProp="PEANUTS!" onSubmitHandler={onClickHandler} />
      </Suspense>
      <hr className="my-10" />
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
