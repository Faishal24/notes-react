import React from "react";
import NoteSearch from './noteSearch.jsx'

function NoteHeader() {
    return (
        <div className="note-app__header">
            <h1>Notes</h1>
            <NoteSearch />
        </div>
    )
}

export default NoteHeader;