import { createElement } from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

interface AppProps {
  transactionId: string | null;
  authorizationToken: string | null;
  disableResultPage: boolean | false;
}

class MfaDesktop extends HTMLElement {
  connectedCallback() {
    const transactionId = this.getAttribute("transactionId");
    const authorizationToken = this.getAttribute("authorizationToken");
    const disableResultPage = this.getAttribute("disableResultPage") === "true";

    console.log("MFADesktop attributes", {
      transactionId,
      authorizationToken,
      disableResultPage,
    });

    const appProps: AppProps = {
      transactionId: transactionId || null,
      authorizationToken: authorizationToken || null,
      disableResultPage: disableResultPage || false,
    };

    ReactDOM.render(createElement(App, { ...appProps }), this);
  }
}

export default MfaDesktop;
