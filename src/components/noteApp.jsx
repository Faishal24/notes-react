import React from "react";
import NoteHeader from "/noteHeader";
import NoteBody from "./noteBody";

class NoteApp extends React.Component {
  render() {
    return (
      <>
        <NoteHeader />
        <NoteBody />
      </>
    );
  }
}

export default NoteApp;