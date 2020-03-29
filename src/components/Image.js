import React from 'react'

const Vector = ({src, size ,children}) => {
    return (
        <div style={{
            display :'flex',
            alignItems: 'center',
            flexDirection: 'column',
            alignContent: 'center'
        }}>
            <img
                src={src}
                alt={children}
                height={size}
            />
        </div>
    )
}

export default Vector;