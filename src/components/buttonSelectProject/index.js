import React from 'react';

import'./style.css';

function ButtonSelectProject(props) {
   return (
       
       <div className='containerButtonSelectProject' >
           <img className='iconButtonSelectProject' src={ props.icon } alt="icon" />
            <button className='buttonSelectProject'>
                { props.children }
            </button>
        </div>
   ) 
}

export default ButtonSelectProject;