import React from 'react'

const RAY_MARCER_BASE = 'https://ceveka.com/webgl-raymarching-ed/?';

const SDF_SET = {
    sphere : {
        type : 'sdf',
        code : 'ZmxvYXQgc2RmKHZlYzMgUCkgewogIGZsb2F0IHIgPSAxLjsKICByZXR1cm4gbGVuZ3RoKFApIC0gcjsKfQ=='
    },
    infinite_cylinder : {
        type: 'sdf',
        code : 'ZmxvYXQgc2RmKHZlYzMgUCkgewogIGZsb2F0IHIgPSAxLjsKICByZXR1cm4gbGVuZ3RoKFAueHopIC0gcjsKfQ=='
    },
    union: {
        type: 'customScene',
        code : 'ZmxvYXQgc2RmRG9udXQodmVjMyBwLCB2ZWMyIHQpIHsKICB2ZWMyIHEgPSB2ZWMyKGxlbmd0aChwLnh6KS10LngscC55KTsKICByZXR1cm4gbGVuZ3RoKHEpLXQueTsKfQoKZmxvYXQgc2RmU3BoZXJlKHZlYzMgcCwgZmxvYXQgcikgewogIHJldHVybiBsZW5ndGgocCkgLSByOwp9CgpmbG9hdCBnZXRTY2VuZURpc3QodmVjMyBwKSB7CiAgZmxvYXQgZDEgPSBzZGZEb251dChwIC0gdmVjMygtMS4sIDAuLCAwLikgLHZlYzIoMi4sMC43NSkpOwogIGZsb2F0IGQyID0gc2RmU3BoZXJlKHAgLSB2ZWMzKDEuNSwgMC4sIDAuKSwgMi4pOwogIAogIGZsb2F0IGQgPSBtaW4oZDEsIGQyKTsKICAKICByZXR1cm4gZDsKfQo='
    },
    intersection: {
        type: 'customScene',
        code : 'ZmxvYXQgc2RmRG9udXQodmVjMyBwLCB2ZWMyIHQpIHsKICB2ZWMyIHEgPSB2ZWMyKGxlbmd0aChwLnh6KS10LngscC55KTsKICByZXR1cm4gbGVuZ3RoKHEpLXQueTsKfQoKZmxvYXQgc2RmU3BoZXJlKHZlYzMgcCwgZmxvYXQgcikgewogIHJldHVybiBsZW5ndGgocCkgLSByOwp9CgpmbG9hdCBnZXRTY2VuZURpc3QodmVjMyBwKSB7CiAgZmxvYXQgZDEgPSBzZGZEb251dChwIC0gdmVjMygtMS4sIDAuLCAwLikgLHZlYzIoMi4sMC43NSkpOwogIGZsb2F0IGQyID0gc2RmU3BoZXJlKHAgLSB2ZWMzKDEuNSwgMC4sIDAuKSwgMi4pOwogIAogIGZsb2F0IGQgPSBtYXgoZDEsIGQyKTsKICAKICByZXR1cm4gZDsKfQo='
    },
    difference: {
        type: 'customScene',
        code : 'ZmxvYXQgc2RmRG9udXQodmVjMyBwLCB2ZWMyIHQpIHsKICB2ZWMyIHEgPSB2ZWMyKGxlbmd0aChwLnh6KS10LngscC55KTsKICByZXR1cm4gbGVuZ3RoKHEpLXQueTsKfQoKZmxvYXQgc2RmU3BoZXJlKHZlYzMgcCwgZmxvYXQgcikgewogIHJldHVybiBsZW5ndGgocCkgLSByOwp9CgpmbG9hdCBnZXRTY2VuZURpc3QodmVjMyBwKSB7CiAgZmxvYXQgZDEgPSBzZGZEb251dChwIC0gdmVjMygtMS4sIDAuLCAwLikgLHZlYzIoMi4sMC43NSkpOwogIGZsb2F0IGQyID0gc2RmU3BoZXJlKHAgLSB2ZWMzKDEuNSwgMC4sIDAuKSwgMi4pOwogIAogIGZsb2F0IGQgPSBtYXgoZDEsIC1kMik7CiAgCiAgcmV0dXJuIGQ7Cn0K'
    },   
}

const RayMarcer = ({name}) => {
    const {type,code} = SDF_SET[name];
    return (
        <iframe src={`${RAY_MARCER_BASE}code=${code}&type=${type}`} width="100%" height="520" style={{border: "none"}}>
        </iframe>
    )
}

export default RayMarcer;
