import React from "react" ;
function Note(props) {
    return (

            <div className="col-sm-6 w-50 h-50">
                    <div className="float-left shadow-lg w-100 h-100 p-3 m-3 rounded-5 ">
                        <h1 className="notepad-header ps-2">{props.title}</h1>
                        <p className="notepad-text text-muted ps-5 pt-2">{props.content}</p>
                    </div>

            </div>
            );
}


export default Note;