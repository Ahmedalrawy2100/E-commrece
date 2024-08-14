import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "@fontsource/open-sans";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./components/Redex/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
