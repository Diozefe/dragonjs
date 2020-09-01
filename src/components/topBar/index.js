import React from 'react';

import {
    FiFile,
    FiFilePlus,
    FiArchive
} from 'react-icons/fi';

import './style.css'

function TopBar() {
    return (
        <div className='topBar'>
            <FiArchive className='topBarIcon' />
            <FiFile className='topBarIcon' />
            <FiFilePlus title='New File' className='topBarIcon' />
        </div>
    )
}

export default TopBar;