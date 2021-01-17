import React from 'react'
import GLMath from 'webgl-math';

import styles from '../css/TransformViewer.module.css';

const TransformViewer = ({ matrix = GLMath.Matrix.idendity(4) }) => {
    return (
        <div className={styles.coord}>
            <div className={[styles.axis, styles.x].join(' ')}></div>
            <div className={[styles.axis, styles.y].join(' ')}></div>
            <div className={[styles.object, styles.shadow].join(' ')}></div>
            <div className={[styles.object, styles.real].join(' ')} style={{ transform: `matrix3d(${matrix.join(',')})` }}></div>
        </div>
    )
}

export default TransformViewer;
