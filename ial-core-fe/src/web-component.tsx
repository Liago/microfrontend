import ReactDOM from "react-dom/client";
import App from "./App";

class MfaDesktop extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const transactionId = this.getAttribute("transactionId");
    const authorizationToken = this.getAttribute("authorizationToken");
    const disableResultPage =
      this.getAttribute("disableResultPage") === "true" ? true : false;

    const root = ReactDOM.createRoot(this.shadowRoot as ShadowRoot);
    root.render(
      <App
        transactionId={transactionId}
        authorizationToken={authorizationToken}
        disableResultPage={disableResultPage}
      />,
    );
  }
}

export default MfaDesktop;
