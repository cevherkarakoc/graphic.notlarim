import React from 'react';
import GLMath from 'webgl-math';
import VectorPrint from '../../components/VectorPrint';
import AnglePrint from '../../components/AnglePrint';

const ReactLiveScope = {
  GLMath,
  React,
  ...React,
  VectorPrint,
  AnglePrint
};

export default ReactLiveScope;
