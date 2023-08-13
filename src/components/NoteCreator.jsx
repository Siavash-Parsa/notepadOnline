import React from "react";
import Note from "./Note";
import noteFiles from "../noteFiles";

function NoteCreator(){
    return (

        noteFiles.map(props =>
            <Note
                key={props.key}
                title={props.title}
                content={props.content}
            />
        )
    );
}

export default NoteCreator;