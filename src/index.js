import React from "react";
import GrandparentComponent from './GrandparentComponent'
import "./index.css";

import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
root.render(<GrandparentComponent />);
