import React from 'react';

import iconReact from '../../assets/image/icon/react.png';
import ButtonSelectProject from '../../components/buttonSelectProject';
import Header from '../../components/header';

function LandingPage() {
    return (
        <div>
            <Header title='DragonJS' />
            
            <ButtonSelectProject icon={ iconReact }>
                Open Project
            </ButtonSelectProject>
        </div>
    )
}

export default LandingPage;