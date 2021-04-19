import React, { useRef } from 'react';

const DrawSignature = () => {
  const refDrawName = useRef();

  const setMouseCoordinates = (event) => {
    const boundings = refDrawName.current.getBoundingClientRect();

    const mouseX = event.clientX - boundings.left;
    const mouseY = event.clientY - boundings.top;

    return { mouseX, mouseY };
  };

  const handleMouseDown = (e) => {
    const canvas = refDrawName.current;
    const context = canvas.getContext('2d');
    context.strokeStyle = 'black';
    context.lineWidth = 1;

    let isDrawing = true;

    const coordinates = setMouseCoordinates(e);

    context.beginPath();
    context.moveTo(coordinates.mouseX, coordinates.mouseY);

    canvas.addEventListener('mousemove', (event) => {
      const coordinates1 = setMouseCoordinates(event);

      if (isDrawing) {
        context.lineTo(coordinates1.mouseX, coordinates1.mouseY);
        context.stroke();
      }
    });

    canvas.addEventListener('mouseup', () => {
      isDrawing = false;
    });
  };

  return (
    <div className="draw-signature">
      <div className="draw-signature-name">
        <canvas
          ref={refDrawName}
          onMouseDown={(e) => handleMouseDown(e)}
         />
        <div className="draw-signature-name__label">
          <span>Chữ ký chính</span>
        </div>
      </div>
      <div className="draw-signature-initial" />
    </div>
  );
};

export default DrawSignature;
