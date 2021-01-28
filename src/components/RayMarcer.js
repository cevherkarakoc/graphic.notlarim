import React from 'react'

const RAY_MARCER_BASE = 'https://ceveka.com/webgl-raymarching-ed/?';
const SDF_SET = {
    sphere : {
        type : 'sdf',
        code : 'ZmxvYXQgc2RmKHZlYzMgUCkgewogIGZsb2F0IHIgPSAxLjsKICByZXR1cm4gbGVuZ3RoKFApIC0gcjsKfQ=='
    }
}

const RayMarcer = ({name}) => {
    const {type,code} = SDF_SET[name];
    return (
        <iframe src={`${RAY_MARCER_BASE}code=${code}&type=${type}`} width="100%" height="520" style={{border: "none"}}>
        </iframe>
    )
}

export default RayMarcer;
