import React from "react";
import NoteItemContent from "./noteItemContent";
import ActionButton from "./noteItemButtonArchive";
import { showFormattedDate } from "../utils/index";

function NoteItemArchive({ id, title, createdAt, body, onDelete, onMove, archived}) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} createdAt={showFormattedDate(createdAt)} body={body} archived={archived} />
      <ActionButton id={id} onDelete={onDelete} onMove={onMove}/>
    </div>
  );
}

export default NoteItemArchive;
