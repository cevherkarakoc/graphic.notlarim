import React from 'react';
import GLMath from 'webgl-math';

import { degreesToRadians } from '../../helpers';
import VectorPrint from '../../components/VectorPrint';
import AnglePrint from '../../components/AnglePrint';
import TransformViewer from '../../components/TransformViewer';

const ReactLiveScope = {
  GLMath,
  React,
  ...React,
  degreesToRadians,
  VectorPrint,
  AnglePrint,
  TransformViewer
};

export default ReactLiveScope;
