import React from "react" ;
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import NoteCreator from "./NoteCreator.jsx";
import noteFiles from "../noteFiles";
function App (){
    return(
        <div>
            <div>
                <Header />
            </div>
            <div className="container">
            <div className="row">
                <NoteCreator />
                <Footer />
            </div>
            </div>
        </div>
    );
}
export default App ;