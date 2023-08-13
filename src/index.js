import React from "react" ;
import { createRoot } from "react-dom/client" ;
import App from "./components/App.jsx" ;
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const rootElement = document.getElementById('root') ;
const root = createRoot(rootElement) ;
root.render(
    <div>
        <App />
    </div>

);



