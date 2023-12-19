import React from "react";
import NoteItemContent from "./noteItemContent";
import ActionButton from "./noteItemButton";
import { showFormattedDate } from "../utils/index";

function NoteItem({ id, title, createdAt, body, onDelete, onArchive, archived}) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} createdAt={showFormattedDate(createdAt)} body={body} archived={archived} />
      <ActionButton id={id} onDelete={onDelete} onArchive={onArchive}/>
    </div>
  );
}

export default NoteItem;
