var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},i=e.parcelRequirefee5;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in r){var i=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,i.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequirefee5=i);var o=i("ilwiq"),a=i("jiuw3"),n=i("5Rd1x"),s=i("7lx9d"),d=i("kp7Te");const l=new(0,(o=i("ilwiq")).Triangle),u=new(0,o.Vector3);class c{constructor(e){let t=e.geometry;t.index&&(console.warn("THREE.MeshSurfaceSampler: Converting geometry to non-indexed BufferGeometry."),t=t.toNonIndexed()),this.geometry=t,this.randomFunction=Math.random,this.positionAttribute=this.geometry.getAttribute("position"),this.colorAttribute=this.geometry.getAttribute("color"),this.weightAttribute=null,this.distribution=null}setWeightAttribute(e){return this.weightAttribute=e?this.geometry.getAttribute(e):null,this}build(){const e=this.positionAttribute,t=this.weightAttribute,r=new Float32Array(e.count/3);for(let i=0;i<e.count;i+=3){let o=1;t&&(o=t.getX(i)+t.getX(i+1)+t.getX(i+2)),l.a.fromBufferAttribute(e,i),l.b.fromBufferAttribute(e,i+1),l.c.fromBufferAttribute(e,i+2),o*=l.getArea(),r[i/3]=o}this.distribution=new Float32Array(e.count/3);let i=0;for(let e=0;e<r.length;e++)i+=r[e],this.distribution[e]=i;return this}setRandomGenerator(e){return this.randomFunction=e,this}sample(e,t,r){const i=this.sampleFaceIndex();return this.sampleFace(i,e,t,r)}sampleFaceIndex(){const e=this.distribution[this.distribution.length-1];return this.binarySearch(this.randomFunction()*e)}binarySearch(e){const t=this.distribution;let r=0,i=t.length-1,o=-1;for(;r<=i;){const a=Math.ceil((r+i)/2);if(0===a||t[a-1]<=e&&t[a]>e){o=a;break}e<t[a]?i=a-1:r=a+1}return o}sampleFace(e,t,r,i){let o=this.randomFunction(),a=this.randomFunction();return o+a>1&&(o=1-o,a=1-a),l.a.fromBufferAttribute(this.positionAttribute,3*e),l.b.fromBufferAttribute(this.positionAttribute,3*e+1),l.c.fromBufferAttribute(this.positionAttribute,3*e+2),t.set(0,0,0).addScaledVector(l.a,o).addScaledVector(l.b,a).addScaledVector(l.c,1-(o+a)),void 0!==r&&l.getNormal(r),void 0!==i&&void 0!==this.colorAttribute&&(l.a.fromBufferAttribute(this.colorAttribute,3*e),l.b.fromBufferAttribute(this.colorAttribute,3*e+1),l.c.fromBufferAttribute(this.colorAttribute,3*e+2),u.set(0,0,0).addScaledVector(l.a,o).addScaledVector(l.b,a).addScaledVector(l.c,1-(o+a)),i.r=u.x,i.g=u.y,i.b=u.z),this}}var h=i("4CEV9");const p={operation:h.SUBTRACTION,wireframe:!1,displayBrushes:!1,shadows:!0,useGroups:!0,randomize:()=>{T(),O()}};let f,w,m,b,g,y,A,S,M,x,B,v,F,E=new(0,h.Evaluator);E.attributes=["position","normal"],E.useGroups=!1;const I=new Map;function O(){const e=window.performance.now();let t=S[0];E.useGroups=!1;for(let e=1,r=S.length;e<r;e++){const r=S[e];t=E.evaluate(t,r,h.ADDITION),t.material=M}E.useGroups=p.useGroups,E.evaluate(A,t,p.operation,B),B.material=p.useGroups?B.material.map((e=>I.get(e))):I.get(A.material);const r=window.performance.now()-e;y.innerText=`${r.toFixed(3)}ms`}function T(){for(let e=0;e<S.length;e++){const t=S[e];x.sample(t.position),t.position.applyMatrix4(A.matrixWorld),t.scale.setScalar(o.MathUtils.lerp(.05,.15,Math.random())),t.updateMatrixWorld()}}function C(){requestAnimationFrame(C),v.visible=p.wireframe,A.visible=p.displayBrushes,S.forEach((e=>e.visible=p.displayBrushes)),F.castShadow=p.shadows,f.render(m,w)}!async function(){y=document.getElementById("output"),f=new o.WebGLRenderer({antialias:!0}),f.setPixelRatio(window.devicePixelRatio),f.setSize(window.innerWidth,window.innerHeight),f.setClearColor(1118481,1),f.shadowMap.enabled=!0,f.shadowMap.type=o.PCFSoftShadowMap,document.body.appendChild(f.domElement),m=new o.Scene,F=new o.DirectionalLight(16777215,1),F.position.set(1,2,1),m.add(F,new o.AmbientLight(11583173,.1));const e=F.shadow.camera;F.castShadow=!0,F.shadow.mapSize.setScalar(4096),F.shadow.bias=1e-5,F.shadow.normalBias=.01,e.left=e.bottom=-2.5,e.right=e.top=2.5,e.updateProjectionMatrix(),w=new o.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,50),w.position.set(0,.65,2.5),w.far=100,w.updateProjectionMatrix(),b=new(0,n.OrbitControls)(w,f.domElement);const t=new o.Mesh(new o.PlaneBufferGeometry,new o.ShadowMaterial({opacity:.05}));t.material.color.set(14743546),t.rotation.x=-Math.PI/2,t.scale.setScalar(10),t.position.y=-.5,t.receiveShadow=!0,m.add(t);const r=(await(new(0,s.GLTFLoader)).setMeshoptDecoder(d.MeshoptDecoder).loadAsync("https://raw.githubusercontent.com/gkjohnson/3d-demo-data/main/models/stanford-bunny/bunny.glb")).scene.children[0].geometry;r.computeVertexNormals(),A=new(0,h.Brush)(r,new o.MeshStandardMaterial),A.position.y=-.5,A.updateMatrixWorld(),A.receiveShadow=!0,m.add(A),M=new o.MeshStandardMaterial,S=[],x=new c(A),x.build();for(let e=0;e<50;e++){const e=new(0,h.Brush)(new o.SphereBufferGeometry(1,15,15),M);e.receiveShadow=!0,m.add(e),S.push(e)}let i;A.material.opacity=.15,A.material.transparent=!0,A.material.depthWrite=!1,A.material.polygonOffset=!0,A.material.polygonOffsetFactor=.1,A.material.polygonOffsetUnits=.1,A.material.side=o.DoubleSide,A.material.premultipliedAlpha=!0,A.material.color.set(14743546),M.opacity=.15,M.transparent=!0,M.depthWrite=!1,M.polygonOffset=!0,M.polygonOffsetFactor=.1,M.polygonOffsetUnits=.1,M.side=o.DoubleSide,M.premultipliedAlpha=!0,M.roughness=.25,M.color.set(5099745),i=A.material.clone(),i.opacity=1,i.transparent=!1,i.depthWrite=!0,I.set(A.material,i),i=M.clone(),i.opacity=1,i.transparent=!1,i.depthWrite=!0,I.set(M,i),B=new o.Mesh(new o.BufferGeometry,new o.MeshStandardMaterial({roughness:.1,flatShading:!1,polygonOffset:!0,polygonOffsetUnits:1,polygonOffsetFactor:1})),B.castShadow=!0,B.receiveShadow=!0,m.add(B),v=new o.Mesh(B.geometry,new o.MeshBasicMaterial({wireframe:!0,color:0,opacity:.15,transparent:!0})),v.material.color.set(5398),m.add(v),g=new(0,a.GUI),g.add(p,"operation",{ADDITION:h.ADDITION,SUBTRACTION:h.SUBTRACTION,INTERSECTION:h.INTERSECTION,DIFFERENCE:h.DIFFERENCE}).onChange((()=>{O()})),g.add(p,"displayBrushes"),g.add(p,"shadows"),g.add(p,"wireframe"),g.add(p,"useGroups").onChange(O),g.add(p,"randomize"),window.addEventListener("resize",(function(){w.aspect=window.innerWidth/window.innerHeight,w.updateProjectionMatrix(),f.setSize(window.innerWidth,window.innerHeight)}),!1),T(),O(),C()}();
//# sourceMappingURL=geometry.11133ed7.js.map
