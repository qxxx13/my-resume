import { useEffect, useState } from 'react';

export const useObserver = (tag: string) => {
    const [isVisible, setIsVisible] = useState(false);

    const callback: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
            entry.isIntersecting && setIsVisible(true);
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(callback, {});

        document.addEventListener('DOMContentLoaded', () => {
            observer.observe(document.querySelector(tag) as Element);
        });
    }, []);

    return isVisible;
};
