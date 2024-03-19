import { Suspense, lazy } from "react";
import ErrorBoundary from "./components/ErrorsApp";
import LoadingSpinner from "./components/LoadingSpinner";

const LoginForm = lazy(() => import("login-form-app/LoginForm"));
const Table = lazy(() => import("table-app/Table"));

export const IalCoreFe = () => {
  const onClickHandler = () => {
    console.log("[IAL-CORE-FE] click!");
  };
  return (
    <div>
      <h1>Main App</h1>
      <Suspense fallback={<LoadingSpinner />}>
        <LoginForm otherProp="PEANUTS!" onSubmitHandler={onClickHandler} />
      </Suspense>
      <hr style={{ margin: "50px 0" }} />
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
