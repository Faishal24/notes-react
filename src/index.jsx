import React from "react";
import { createRoot } from "react-dom/client";

// import style
import "./styles/style.css";
import NoteHeader from "./components/noteheader";
import NoteBody from "./components/noteBody";
import NoteApp from "./components/noteApp";


const root = createRoot(document.getElementById("root"));
root.render(<NoteApp />);
