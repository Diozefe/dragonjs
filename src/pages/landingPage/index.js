import React from 'react';

import ButtonSelectProject from '../../components/buttonSelectProject';
import Header from '../../components/header';

import iconReact from '../../assets/image/icon/react.png';
import iconJS from '../../assets/image/icon/js.png';
import iconNode from '../../assets/image/icon/node.png';
import { FiFile } from 'react-icons/fi';
import TopBar from '../../components/topBar/index';

import iconDrag from '../../assets/image/icon/logodrag.png';

import './style.css'

function LandingPage() {
    return (
        <div>
            <Header title='DragonJS' />
            <div className='container'>
                <TopBar/>   
                <br/>
                <ButtonSelectProject>
                    <FiFile style={{ position: 'absolute', left: '0.9%', fontSize: 20 }} />
                    Open Project
                </ButtonSelectProject>
                <br/>
                <ButtonSelectProject>
                    <img 
                        src={ iconJS } 
                        style={{ width: 20, position: 'absolute', left: '1%' }} 
                        alt='js'
                    /> 
                    New Default Project
                </ButtonSelectProject>
                <br/>
                <ButtonSelectProject>
                    <img 
                        src={ iconReact } 
                        style={{ width: 40, position: 'absolute', left: '0%' }}
                        alt='react'
                    /> 
                    New React
                </ButtonSelectProject>
                <br/>
                <ButtonSelectProject>
                    <img 
                        src={ iconNode } 
                        style={{ width: 40, position: 'absolute', left: '0.7%' }}
                        alt='node'
                    /> 
                    New Node
                </ButtonSelectProject>
            </div>

            <img className='logoDragon' src={ iconDrag } alt='dragon' />
        </div>
    )
}

export default LandingPage;