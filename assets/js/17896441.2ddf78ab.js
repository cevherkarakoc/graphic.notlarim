"use strict";(self.webpackChunkgraphic_notlarim=self.webpackChunkgraphic_notlarim||[]).push([[918],{3997:(e,a,t)=>{t.d(a,{Z:()=>m});var r=t(7294),l=t(7702);const n=["#d54062","#00917c","#3f72af","#fe91ca"],c=e=>{let{label:a="Sonu\xe7",separator:t=" , ",vector:l}=e;return r.createElement("div",null,r.createElement("h4",null,a," : ( ",Array.from(l).map(((e,a)=>r.createElement("span",{key:e+"x"+a},r.createElement("span",{style:{color:n[a%n.length]}},e)," ",a<l.length-1?t:""))),")"))},s=e=>{let{label:a="A\xe7\u0131",angle:t}=e;const l=(e=>e*(180/Math.PI))(t);return r.createElement("div",null,r.createElement("h4",null,a," :",r.createElement("span",{style:{color:n[0],marginLeft:8,marginRight:16}},l,"\xb0"),r.createElement("span",{style:{color:n[2]}},t," radyan")))},o={coord:"coord_Bq18",axis:"axis_fLtG",x:"x_Vops",y:"y_MWLh",object:"object_CvvY",shadow:"shadow_QXLD",real:"real_hePy"},i=e=>{let{matrix:a=l.Matrix.idendity(4)}=e;return r.createElement("div",{className:o.coord},r.createElement("div",{className:[o.axis,o.x].join(" ")}),r.createElement("div",{className:[o.axis,o.y].join(" ")}),r.createElement("div",{className:[o.object,o.shadow].join(" ")}),r.createElement("div",{className:[o.object,o.real].join(" "),style:{transform:`matrix3d(${a.join(",")})`}}))},m={GLMath:l,React:r,...r,degreesToRadians:e=>e*(Math.PI/180),VectorPrint:c,AnglePrint:s,TransformViewer:i}}}]);