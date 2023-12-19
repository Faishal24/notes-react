import React from "react";
import NoteItem from "./noteItem";

function NoteList({ notes, onDelete, onArchive }) {
  if (notes.filter((note) => note.archived === false).length == 0) {
    return (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )
  } else {
    return (
      <div className="notes-list">
          {
              notes.filter((note) => note.archived === false).map((note) => (
                  <NoteItem 
                  key={note.id}
                  id={note.id}
                  onDelete={onDelete}
                  onArchive={onArchive}
                  {...note} />
              ))
          }
      </div>
    );
  }
}

export default NoteList;