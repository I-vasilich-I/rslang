import React, { useEffect, useState } from 'react';

import './ComboPanel.scss';
import combo_10 from './images/combo_10.png';
import combo_20 from './images/combo_20.png';
import combo_40 from './images/combo_40.png';
import combo_80 from './images/combo_80.png';

interface ComboPanelProps {
    gainPoint?: number;
}

interface ComboType {
    img: string;
    point: number;
}

export const ComboPanel: React.FC<ComboPanelProps> = (props: ComboPanelProps) => {
    const comboArray: Array<ComboType> = [
        {
            img: combo_10,
            point: 10,
        },
        {
            img: combo_20,
            point: 20,
        },
        {
            img: combo_40,
            point: 40,
        },
        {
            img: combo_80,
            point: 80,
        },
    ];
    const { gainPoint } = props;

    const [gain, setGain] = useState(0);

    useEffect(() => {
        if (gainPoint !== undefined) {
            setGain(gainPoint);
        }
    }, [gainPoint]);

    return (
        <div className='combo-panel'>
            <div className='combo-panel__wrapper'>
                <span className='combo-panel__value'>+{comboArray[gain].point}</span>
                <img className='combo-panel__image' src={comboArray[gain].img} alt='combo-icon' />
            </div>
        </div>
    );
};
