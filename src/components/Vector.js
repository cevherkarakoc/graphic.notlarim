import React from 'react'

import { BlockMath } from "react-katex";

const Vector = ({row = false ,children}) => {
    const type = row ? '&&' : String.raw`\\` ;
    const latex = children.join(String.raw` ${type} `);
    return (
        <BlockMath>
        {String.raw`
            \begin{pmatrix}  ${latex} \end{pmatrix}
        `}
        </BlockMath>
    )
}

export default Vector;