import './style.css'

import * as THREE from "three";


// キャンバスの取得
const canvas = document.querySelector(".webgl");


// シーン
const scene = new THREE.Scene();

// カメラ

// サイズ設定
const sizes = {
  width:window.innerWidth,
  height:window.innerHeight,
};

// カメラ
const camera = new THREE.PerspectiveCamera(
  35,
  sizes.width/sizes.height,
  0.1,
  100
);
camera.position.z=6;
scene.add(camera);

// レンダラー
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha:true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(window.devicePixelRatio);


// オブジェクトを作成

// マテリアル
const material = new THREE.MeshPhysicalMaterial({
  color:"#9c998d",
  metalness:0.86,
  roughness:0.37,
  flatShading:true,
})

// メッシュ
const mesh1 = new THREE.Mesh(new THREE.TorusGeometry(1,0.4,16,60),material);
const mesh2 = new THREE.Mesh(new THREE.OctahedronGeometry(),material);
const mesh3 = new THREE.Mesh(
  new THREE.TorusGeometry(0.8,0.35,100,16),material);
  
const mesh4 = new THREE.Mesh(new THREE.IcosahedronGeometry(),material);

// 回転用の配置
mesh1.position.set(2,0,0);
mesh2.position.set(-1,0,0);
mesh3.position.set(2,0,-6);
mesh4.position.set(5,0,3);


scene.add(mesh1,mesh2,mesh3,mesh4);


// ライトを追加
const directionalLight = new THREE.DirectionalLight("#ffffff",9);
directionalLight.position.set(0.5,1,)
scene.add(directionalLight);


// ブラウザリサイズ操作
window.addEventListener("resize", ()=>{
  // サイズのアップデーㇳ
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // カメラのアップデート
  camera.aspect = sizes.width/ sizes.height;
  camera.updateProjectionMatrix();

  // レンダラーのアップデート
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(window.devicePixelRatio);


});
  // アニメーション
  const animate = () =>{
    renderer.render(scene,camera);
    window.requestAnimationFrame(animate);
  };

  animate();





// renderer.render(scene,camera);








