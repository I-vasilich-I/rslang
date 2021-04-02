import React, { useState } from 'react';

import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';

import './Fullscreen.scss';

interface FullscreenProps {
    clickHandler: () => void;
}

export const Fullscreen: React.FC<FullscreenProps> = (props: FullscreenProps) => {
    const [fullscreen, setFullscreen] = useState(false);

    return (
        <div className='fullscreen-wrapper'>
            <button
                title={`${fullscreen ? 'Выйти из полноэкранного режима' : 'Полноэкранный режим'}`}
                className='fullscreen-button'
                onClick={() => {
                    props.clickHandler();
                    setFullscreen((fullscreen) => !fullscreen);
                }}
            >
                {fullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
            </button>
        </div>
    );
};
