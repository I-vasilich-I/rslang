import React, { useLayoutEffect, useRef, useState } from 'react';
import './Video.scss';

interface iProps {
    source: string;
}

interface iDimensions {
    width: number;
    height: number;
}
export const Video: React.FC<iProps> = ({ source }: iProps) => {
    const targetRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState<iDimensions>({ width: 0, height: 0 });

    let movement_timer: NodeJS.Timeout;
    const RESET_TIMEOUT = 100;
    const test_dimensions = () => {
        if (targetRef.current) {
            setDimensions({
                width: targetRef.current.offsetWidth,
                height: targetRef.current.offsetHeight,
            });
        }
    };
    useLayoutEffect(() => {
        test_dimensions();
    }, []);

    window.addEventListener('resize', () => {
        movement_timer && clearTimeout(movement_timer);
        movement_timer = setTimeout(test_dimensions, RESET_TIMEOUT);
    });

    return (
        <div className='video-wrapper' ref={targetRef}>
            <iframe
                width={dimensions.width}
                height={((dimensions.width / 16) * 9).toString()}
                src={source}
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                title='Video'
                allowFullScreen={true}
            ></iframe>
        </div>
    );
};
