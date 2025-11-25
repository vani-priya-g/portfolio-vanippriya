import React from 'react';

const ShapeDecorations = ({ variant = 'default' }) => {
    const shapes = {
        default: [
            { type: 'circle', size: 200, top: '10%', left: '5%', animation: 'animate-float' },
            { type: 'square', size: 150, top: '60%', right: '10%', animation: 'animate-float-delayed' },
            { type: 'circle', size: 100, bottom: '20%', left: '15%', animation: 'animate-pulse' },
            { type: 'triangle', top: '30%', right: '5%', animation: 'animate-float' },
        ],
        hero: [
            { type: 'circle', size: 300, top: '5%', right: '10%', animation: 'animate-float' },
            { type: 'square', size: 120, top: '70%', left: '5%', animation: 'animate-float-delayed' },
            { type: 'circle', size: 80, top: '40%', left: '10%', animation: 'animate-pulse' },
            { type: 'hexagon', bottom: '10%', right: '15%', animation: 'animate-float' },
        ],
        section: [
            { type: 'circle', size: 150, top: '5%', left: '3%', animation: 'animate-pulse' },
            { type: 'square', size: 100, bottom: '10%', right: '5%', animation: 'animate-float-delayed' },
        ]
    };

    const selectedShapes = shapes[variant] || shapes.default;

    return (
        <>
            {selectedShapes.map((shape, index) => {
                const style = {
                    width: shape.size ? `${shape.size}px` : 'auto',
                    height: shape.size ? `${shape.size}px` : 'auto',
                    top: shape.top || 'auto',
                    bottom: shape.bottom || 'auto',
                    left: shape.left || 'auto',
                    right: shape.right || 'auto',
                };

                return (
                    <div
                        key={index}
                        className={`shape shape-${shape.type} ${shape.animation}`}
                        style={style}
                    />
                );
            })}
        </>
    );
};

export default ShapeDecorations;
