/**
 * object를 포함할 scene
 * camera
 * renderer
 */

/** 1) Scence */
const scene = new THREE.Scene();

/** 2) Objects
 * Object가 될 수 있는 것들
 * geometries, import된 models, particles, lights 등
 */

/** 예제) 기본적인 파란색 도넛 모양 만들기
 *
 * Mesh Object 만들기
 * Mesh는 geometry와 material의 결합으로, Geometry와 Material은 다양한 것들이 존재
 *
 * Object를 만드는 순서
 *
 * 1. geometry, material 각각을 생성
 * 2. mesh를 통해 둘을 결합
 * 3. 결합한 mesh를 scene에 추가
 */

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

/** 3) Camera
 *
 * perspective camera
 *
 * 1) the field of view
 * 시야각을 조절함, 큰 앵글을 사용하면 모든 방향을 한번에 볼 수 있지만 왜곡이 생김
 * 작은 앵글을 사용하면 사물이 확대된 것처럼 보임
 * 사람의 시야와 유사한건 75도 정도
 */

const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// render 전 카메라의 포지션 위치를 변경
camera.position.z = 50;
scene.add(camera);

/** 4) Renderer
 *
 * renderer에게 render을 요청하여 camera 시점에서 보이는 모습을 캔버스 위에 그려냄
 *
 * html 파일에 canvas 추가
 */

const canvas = document.querySelector("canvas.webgl");

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// renderer을 이용해 렌더

renderer.render(scene, camera);
