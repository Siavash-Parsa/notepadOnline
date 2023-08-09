import React from 'react';


import { nav, navbar, containerFluid } from "reactstrap" ;

function Header(){
    return (

        <nav className="navigation">
            <containerFluid>
                <navbar>
                    <div>
                        <h1 className="header shadow" >KeeperApp</h1>
                    </div>



                </navbar>
            </containerFluid>
        </nav>


    );
}

export default Header;