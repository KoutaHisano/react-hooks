import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const Info = {
  name: "hoge太郎",
  age: 25,
};

const InfoContext = createContext(Info);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <InfoContext.Provider value={Info}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </InfoContext.Provider>
);

export default InfoContext;
