import { Typography } from "antd";
import { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
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
    <Router>
      <div>
        <Title level={2}>h2. Ant Design</Title>
        <h1 className="text- p-b pb pb-8 text-red-400">Main App</h1>
        <Routes>
          <Route
            path="/login"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <LoginForm
                  lo
                  otherProp="PEANUTS!"
                  onSubmitHandler={onClickHandler}
                />
              </Suspense>
            }
          />
          <Route
            path="/users"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Table />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </Router>
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
