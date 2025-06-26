import "./index.css";
import "./setup-dayjs.ts";

import { createRoot } from "react-dom/client";

import App from "./components/App.tsx";

createRoot(document.getElementById("root")!).render(<App />);
