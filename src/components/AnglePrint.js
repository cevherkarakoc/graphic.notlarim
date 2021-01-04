import React from 'react'
import { colors, radiansToDegrees } from '../helpers';

const AnglePrint = ({ label = 'Açı', angle }) => {
    const degree = radiansToDegrees(angle);
    return (
        <div>
            <h4>{label} :
                <span style={{ color: colors[0], marginLeft: 8, marginRight: 16 }}>{degree}°</span>
                <span style={{ color: colors[2] }}>{angle} radyan</span>
            </h4>
        </div>
    )
}

export default AnglePrint;
