import React from "react";
import NoteInput from "./noteInput";
import NoteList from "./noteList";
import { getInitialData, showFormattedDate } from "../utils/index";
import NoteListArchive from "./noteListArchive";

class NoteBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      archived: "",
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandle = this.onDeleteHandle.bind(this);
    this.onArchiveHandle = this.onArchiveHandle.bind(this);
    this.onMoveHandler = this.onMoveHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: showFormattedDate(new Date()),
            archived: false,
          },
        ],
      };
    });
  }

  onDeleteHandle(id) {
    const notes = this.state.notes.filter((notes) => notes.id !== id);
    this.setState({ notes });
  }

  onArchiveHandle(id) {
    this.setState((prevState) => {
      const newNotes = [...prevState.notes];
      const index = newNotes.findIndex((note) => note.id === id);

      if (index !== -1) {
        newNotes[index] = {
          ...newNotes[index],
          archived: true,
        };

        return {
          notes: newNotes,
        };
      }
    });
  }

  onMoveHandler(id) {
    this.setState((prevState) => {
      const newNotes = [...prevState.notes];
      const index = newNotes.findIndex((note) => note.id === id);

      if (index !== -1) {
        newNotes[index] = {
          ...newNotes[index],
          archived: false,
        };

        return {
          notes: newNotes,
        };
      }
    });
  }

  render() {
    return (
      <div className="note-app__body">
        <div className="note-input">
          <h2>Buat Catatan</h2>
          <NoteInput addNote={this.onAddNoteHandler} />
        </div>

        <h2>Catatan Aktif</h2>
        <NoteList
          notes={this.state.notes}
          onDelete={this.onDeleteHandle}
          onArchive={this.onArchiveHandle}
        />

        <h2>Arsip</h2>
        <NoteListArchive
          notes={this.state.notes}
          onDelete={this.onDeleteHandle}
          onMove={this.onMoveHandler}
        />
      </div>
    );
  }
}

export default NoteBody;
