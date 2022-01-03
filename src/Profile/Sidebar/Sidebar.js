import React from 'react';
import './Sidebar.css'

function Sidebar(){

    return(
        <div className='sidebar-container'>
            <div className='Info'>
                <p><b>Background: </b> 7al gomreg f el chbika</p>
                <p><b>Location: </b> elchbika</p>
                <p><b>Collab status:</b> Open ylawej ala chkound bch ycharek maah fi gram</p>
            </div>
            <div className='WorkingOn'>
                <p><b>Working on: </b> nkhdem fi bedni</p>
            </div>
            <div className='Badges'>
                <p>Tounes mafihach mosta9bel</p>
            </div>
        </div>
    )

}

export default Sidebar;