import { useEffect, useRef, useState } from 'react';

export const useTimer = (initialValue: number, callback: () => void): { time: number } => {
    const refTimer = useRef<NodeJS.Timeout>();
    const [time, setTime] = useState(initialValue);

    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        refTimer.current = timerId;

        return () => {
            if (timerId !== undefined) {
                clearInterval(timerId);
            }
        };
    }, []);

    useEffect(() => {
        if (time < 1 && refTimer.current !== undefined) {
            clearInterval(refTimer.current);
            callback();
        }
    }, [time]);

    const tick = () => {
        setTime((time) => time - 1);
    };

    return {
        time,
    };
};
