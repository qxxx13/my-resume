import { createRef, useEffect, useState } from 'react';

export const useFindHeightBlock = () => {
    const [height, setHeight] = useState(0);
    const ref = createRef<HTMLDivElement>();

    useEffect(() => {
        const height = ref.current?.getBoundingClientRect().height;
        setHeight(height as number);
    }, [ref]);

    return { ref, height };
};
