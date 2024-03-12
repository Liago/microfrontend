import { Suspense, lazy } from "react";
import ErrorBoundary from "./components/ErrorsApp";

const LoginForm = lazy(() => import("login-form-app/LoginForm"));
const Table = lazy(() => import("table-app/Table"));

export const Myapp = () => {
  const onClickHandler = () => {
    console.log("click");
  };
  return (
    <div>
      <h1>Main App</h1>
      <Suspense fallback={<div>Loading login form...</div>}>
        <LoginForm otherProp="PEANUTS!" onSubmitHandler={onClickHandler} />
      </Suspense>
      <Suspense fallback={<div>Loading table...</div>}>
        <Table />
      </Suspense>
      <div className="border-4 border-lime-500">evviva la merda!</div>
    </div>
  );
};

const App = () => {
  return (
    <ErrorBoundary>
      <Myapp />
    </ErrorBoundary>
  );
};

export default App;
