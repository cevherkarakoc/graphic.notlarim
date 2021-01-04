import React from 'react';
import GLMath from 'webgl-math';

const ReactLiveScope = {
    GLMath,
    React,
    ...React,
    DOC: {
        separator : ' , ',
        radiansToDegrees: angle => angle * (180 / Math.PI),
        degreesToRadians: angle => angle * (Math.PI / 180),
    }
  };
  
export default ReactLiveScope;
