import React from "react";
import NoteHeader from "./noteheader";
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