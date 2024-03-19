import ReactDOM from "react-dom/client";
import App from "./App";

interface AppProps {
  transactionId: string | null;
  authorizationToken: string | null;
  disableResultPage: boolean | false;
}

class MfaDesktop extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const transactionId = this.getAttribute("transactionId");
    const authorizationToken = this.getAttribute("authorizationToken");
    const disableResultPage = this.getAttribute("disableResultPage") === "true";

    console.log("MFADesktop attributes", {
      transactionId,
      authorizationToken,
      disableResultPage,
    });

    const root = ReactDOM.createRoot(this.shadowRoot as ShadowRoot);

    const appProps: AppProps = {
      transactionId: transactionId || null,
      authorizationToken: authorizationToken || null,
      disableResultPage: disableResultPage || false,
    };

    root.render(<App {...appProps} />);
  }
}

export default MfaDesktop;
