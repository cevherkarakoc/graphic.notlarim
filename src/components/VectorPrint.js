import React from 'react'
import { colors } from '../helpers';

const VectorPrint = ({ label = 'Sonuç', separator = ' , ', vector }) => {
    return (
        <div>
            <h4>{label} :
            ( {Array.from(vector).map(
                (
                    comp, index) => (
                    <span key={comp + 'x' + index}>
                        <span style={{ color: colors[index % colors.length] }}>{comp}</span> {index < vector.length - 1 ? separator : ''}
                    </span>
                )
            )})
            </h4>
        </div>
    )
}

export default VectorPrint;
