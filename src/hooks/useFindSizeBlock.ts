import { createRef, useEffect, useState } from 'react';

export const useFindSizeBlock = () => {
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const ref = createRef<HTMLDivElement>();

    useEffect(() => {
        const height = ref.current?.getBoundingClientRect().height;
        const width = ref.current?.getBoundingClientRect().width;
        setHeight(height as number);
        setWidth(width as number);
    }, [ref]);

    return { ref, height, width };
};
