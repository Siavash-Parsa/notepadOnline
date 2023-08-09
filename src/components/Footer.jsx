import React from "react";






function Footer(){
    let yearTime =new Date();
    yearTime = yearTime.getFullYear() ;
    return (
        <div className="footer">
            <p>copyright {yearTime} ©️</p>
        </div>
    );
}

export default Footer;