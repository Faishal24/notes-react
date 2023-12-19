import React from "react";
import NoteItemArchive from "./noteItemArchive";

function NoteListArchive ({notes, onDelete, onMove}) {
  if (notes.filter((note) => note.archived === true ).length == 0) {
        return (
            <p className="notes-list__empty-message">Tidak ada catatan</p>
          )
      } else {
        return (
          <div className="notes-list">
              {
                  notes.filter((note) => note.archived === true).map((note) => (
                      <NoteItemArchive
                      key={note.id}
                      id={note.id}
                      onDelete={onDelete}
                      onMove={onMove}
                      {...note} />
                  ))
              }
          </div>
        );
      }
}
export default NoteListArchive;