import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import DataResult from "./DataResult.tsx";
import "./index.css";
import DetailCollection from "./DetailCollection.tsx";
import RDTransaction from "./RDTransaction.tsx";
import { InvoicePayment } from "./InvoicePayment.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <DataResult />
    {/* <DetailCollection /> */}
    {/* <RDTransaction /> */}
    {/* <InvoicePayment /> */}
  </React.StrictMode>
);
