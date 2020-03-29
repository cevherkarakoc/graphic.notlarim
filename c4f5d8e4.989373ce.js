(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{106:function(t,e,a){"use strict";a.r(e),function(t){var r=a(0),o=a.n(r),l=a(117),n=a(113),s=a(151),c=a.n(s);t.DOC={separator:" , ",radiansToDegrees:t=>t*(180/Math.PI),degreesToRadians:t=>t*(Math.PI/180)},t.GLMath=c.a,e.default=function(){return o.a.createElement(l.a,{to:Object(n.a)("/intro")})}}.call(this,a(55))},115:function(t,e){const a=t=>t.map(t=>-t),r=t=>Math.sqrt(t.reduce((t,e)=>t+Math.pow(e,2),0)),o=(t,e)=>t.map(t=>t*e),l=(t,e)=>t.map((t,a)=>t+e[a]),n=t=>Float32Array.of(Math.cos(t),Math.sin(t)),s=t=>Math.atan2(t[1],t[0]);t.exports={negative:a,reverse:t=>Float32Array.from(t).reverse(),length:r,scale:o,normalize:t=>{return o(t,1/((e=r(t))>0?e:1));var e},add:l,subtract:(t,e)=>l(t,a(e)),multiply:(t,e)=>t.map((t,a)=>t*e[a]),dot:(t,e)=>t.reduce((t,a,r)=>t+a*e[r],0),cross:(t,e)=>Float32Array.of(t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]),fromAngle:n,toAngle:s,rotate:(t,e)=>n(s(t)+e),swizzle:(t,e)=>Float32Array.from(e.map(e=>t[Math.abs(e)]*Math.sign(1/e)))}},119:function(t,e,a){const r=a(115),o=(t,e)=>Array.from(new Float32Array(e),(a,r)=>t.slice(r*e,(r+1)*e)),l=t=>{if(1===t.length)return t[0];{const e=Math.sqrt(t.length);return t.slice(0,e).reduce((a,r,o)=>{const n=t.filter((t,a)=>a>=e&&(a-o)%e!=0);return a+(o%2==0?1:-1)*r*l(n)},0)}},n=t=>{const e=Math.sqrt(t.length);return Float32Array.from(new Float32Array(t.length),(t,a)=>a%e*e+Math.floor(a/e)).map(e=>t[e])},s=t=>c(t,-1),c=(t,e)=>t.map(t=>t*e),i=(t,e)=>t.map((t,a)=>t+e[a]);t.exports={slice:o,flat:t=>Float32Array.from(t.reduce((t,e)=>Float32Array.of(...t,...Float32Array.from(e)))),idendity:t=>new Float32Array(t*t).map((e,a)=>a%(t+1)==0?1:0),determinant:l,transpose:n,negative:s,multiplyScalar:c,multiplyVector:(t,e)=>Float32Array.from(o(n(t),e.length),t=>t.reduce((t,a,r)=>t+a*e[r],0)),add:i,subtract:(t,e)=>i(t,s(e)),multiplyCompWise:(t,e)=>t.map((t,a)=>t*e[a]),multiply:(t,e)=>((t,e)=>new Float32Array(t.length*t.length).map((a,o)=>r.dot(t[o%t.length],e[Math.floor(o/t.length)])))(o(n(t),Math.sqrt(t.length)),o(e,Math.sqrt(e.length)))}},122:function(t,e,a){const r=a(115),o=a(119);t.exports={scale:(t,e)=>((t,e)=>o.flat(o.slice(t,e.length).map((t,a)=>r.scale(t,e[a]))))(t,Float32Array.of(...e,1)),translate:(t,e)=>((t,e)=>o.flat(o.slice(t,e.length).map((t,a,o)=>a!==o.length-1?t:o.reduce((t,a,o)=>r.add(t,r.scale(a,e[o])),new Float32Array(e.length).fill(0)))))(t,Float32Array.of(...e,1)),rotate:(t,e,a)=>((t,e)=>o.flat(o.slice(t,Math.sqrt(t.length)).map((t,a,o)=>a===o.length-1?t:o.slice(0,3).reduce((t,o,l)=>r.add(t,r.scale(o,e[a][l])),new Float32Array(4).fill(0)))))(t,((t,e)=>{const a=Math.sin(t),o=Math.cos(t),l=r.normalize(e),n=r.scale(l,1-o);return[Float32Array.of(o+n[0]*l[0],n[0]*l[1]+a*l[2],n[0]*l[2]-a*l[1]),Float32Array.of(n[1]*l[0]-a*l[2],o+n[1]*l[1],n[1]*l[2]+a*l[0]),Float32Array.of(n[2]*l[0]+a*l[1],n[2]*l[1]-a*l[0],o+n[2]*l[2])]})(e,a))}},151:function(t,e,a){const r=a(152);t.exports.VERSION=r.version,t.exports.Vector=a(115),t.exports.Matrix=a(119),t.exports.Camera=a(153),t.exports.Transform=a(122)},152:function(t){t.exports=JSON.parse('{"_from":"webgl-math@^1.1.0","_id":"webgl-math@1.1.0","_inBundle":false,"_integrity":"sha512-Qhf7n/17PPzEbCypKKrJSoaoIv8VPDECbNxm5h5O8bfPJnqam7GTjiIwrR152CXVNcsjvsMqMBQGFP7X4B6N/g==","_location":"/webgl-math","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"webgl-math@^1.1.0","name":"webgl-math","escapedName":"webgl-math","rawSpec":"^1.1.0","saveSpec":null,"fetchSpec":"^1.1.0"},"_requiredBy":["#USER","/"],"_resolved":"https://registry.npmjs.org/webgl-math/-/webgl-math-1.1.0.tgz","_shasum":"6e3ea61c7b80a525133b8626edd9ebdf88129a77","_spec":"webgl-math@^1.1.0","_where":"/home/cevherkarakoc/dev/github/graphic.notlarim","author":{"name":"cevherkarakoc","email":"cevherkarakoc@live.com","url":"https://github.com/cevherkarakoc"},"bugs":{"url":"https://github.com/cevherkarakoc/WebGL-Math/issues"},"bundleDependencies":false,"deprecated":false,"description":"A Mathematics Library for WebGL","devDependencies":{"@rollup/plugin-commonjs":"^11.0.2","@rollup/plugin-json":"^4.0.2","jest":"^25.1.0","rollup":"^2.1.0","rollup-plugin-terser":"^5.3.0"},"homepage":"https://github.com/cevherkarakoc/WebGL-Math#readme","license":"MIT","main":"index.js","name":"webgl-math","repository":{"type":"git","url":"git+https://github.com/cevherkarakoc/WebGL-Math.git"},"scripts":{"build":"rollup -c","prepublish":"npm run build","test":"jest","test-matrix":"jest matrix","test-vector":"jest vector","test-watchAll":"jest --watchAll"},"version":"1.1.0"}')},153:function(t,e,a){const r=a(115),o=a(119),l=a(122);t.exports={perspective:(t,e,a,r)=>{const o=1/Math.tan(.5*t);return Float32Array.of(o/e,0,0,0,0,o,0,0,0,0,(r+a)/(a-r),-1,0,0,2*r*a/(a-r),0)},ortho:(t,e,a,r,o,l)=>Float32Array.of(2/(t-e),0,0,0,0,2/(r-a),0,0,0,0,2/(o-l),0,(e+t)/(t-e),(r+a)/(a-r),(l+o)/(o-l),1),lookAt:(t,e,a)=>{const n=r.normalize(r.subtract(t,e)),s=r.cross(r.normalize(a),n),c=r.cross(n,s);return o.multiply(o.transpose(o.flat([Float32Array.of(...s,0),Float32Array.of(...c,0),Float32Array.of(...n,0),Float32Array.of(0,0,0,1)])),l.translate(o.idendity(4),o.negative(t)))}}}}]);