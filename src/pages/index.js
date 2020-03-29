import React from 'react';

import {Redirect} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

import GLMath from 'webgl-math';

global.DOC = {
  separator : ' , ',
  radiansToDegrees: angle => angle * (180 / Math.PI),
  degreesToRadians: angle => angle * (Math.PI / 180),
};
global.GLMath = GLMath;

function Home() {
  return <Redirect to={useBaseUrl('/intro')} />;
}

export default Home;