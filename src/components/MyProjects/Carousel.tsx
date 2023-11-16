import React, { ReactElement, useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';

export const Carousel: React.FC<{ children: ReactElement[] }> = ({ children }) => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return (
        <ReactSimplyCarousel
            activeSlideIndex={activeSlideIndex}
            onRequestChange={setActiveSlideIndex}
            infinite
            centerMode
            itemsToShow={1}
            itemsToScroll={1}
            forwardBtnProps={{
                style: {
                    alignSelf: 'center',
                    background: 'transparent',
                    border: 'none',
                    borderRadius: '50%',
                    color: '#2978ff',
                    cursor: 'pointer',
                    fontSize: '20px',
                    height: 30,
                    lineHeight: 1,
                    textAlign: 'center',
                    width: 30,
                    position: 'absolute',
                    right: 0,
                    zIndex: 100,
                },
                children: <span>{`>`}</span>,
            }}
            backwardBtnProps={{
                style: {
                    alignSelf: 'center',
                    background: 'transparent',
                    border: 'none',
                    borderRadius: '50%',
                    color: '#2978ff',
                    cursor: 'pointer',
                    fontSize: '20px',
                    height: 30,
                    lineHeight: 1,
                    textAlign: 'center',
                    width: 30,
                    position: 'absolute',
                    left: 0,
                    zIndex: 100,
                },
                children: <span>{`<`}</span>,
            }}
            speed={400}
            easing="linear"
        >
            {children}
        </ReactSimplyCarousel>
    );
};
