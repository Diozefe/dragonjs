import React from 'react';

import'./style.css';

function ButtonSelectProject(props) {
   return (       
       <div className='containerButtonSelectProject' >
            <button className='buttonSelectProject'>
                { props.children }
            </button>
        </div>
   ) 
}

export default ButtonSelectProject;