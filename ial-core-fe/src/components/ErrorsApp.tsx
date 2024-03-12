import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by Error Boundary:", error, errorInfo);
  }

  render() {
    if (this?.state?.hasError) {
      return (
        <div
          style={{
            padding: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1>{this?.state?.error?.stack}</h1>
          <p>{`Something went wrong: ${this?.state?.error?.message}`}</p>
        </div>
      );
    }
    return this?.props?.children;
  }
}

export default ErrorBoundary;
