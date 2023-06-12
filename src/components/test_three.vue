<template>
  <div class="test_three" />
</template>

<script>
import * as THREE from 'three'
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import { FlyControls } from 'three/examples/jsm/controls/FlyControls.js'

export default {
  name: 'TestThree',
  data () {
    return {
    }
  },
  mounted () {
    // three.js started
    const scene = new THREE.Scene()
    scene.fog = new THREE.Fog(0x000000, 250, 1400)
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.125)
    dirLight.position.set(0, 20, 0).normalize()
    scene.add(dirLight)
    const pointLight = new THREE.PointLight(0xffffff, 1.5)
    pointLight.position.set(20, 0, 0)
    scene.add(pointLight)

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshNormalMaterial()
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    const material2 = new THREE.LineBasicMaterial({ color: 0x0000ff })
    const points = []
    points.push(new THREE.Vector3(-10, 0, 0))
    points.push(new THREE.Vector3(0, 10, 0))
    points.push(new THREE.Vector3(10, 0, 0))
    points.push(new THREE.Vector3(0, -10, 0))
    points.push(new THREE.Vector3(-10, 0, 0))
    const geometry2 = new THREE.BufferGeometry().setFromPoints(points)
    const line = new THREE.Line(geometry2, material2)
    scene.add(line)

    camera.position.set(0, 0, 20)
    camera.lookAt(0, 0, 0)

    // const controls = new OrbitControls(camera, renderer.domElement)
    // controls.target.set(0, 0, 0)
    // controls.update()
    // controls.enablePan = false
    // controls.enableDamping = true

    const controls = new FlyControls(camera, renderer.domElement)

    controls.movementSpeed = 1
    controls.domElement = renderer.domElement
    // controls.rollSpeed = Math.PI / 2400
    controls.autoForward = false
    controls.dragToLook = true

    const loader = new THREE.FontLoader()
    const font = loader.parse(require('three/examples/fonts/helvetiker_regular.typeface.json'))

    const materials = new THREE.MeshBasicMaterial({
      color: 0x11BE73,
      transparent: true,
      opacity: 0.5
    })

    for (let i = -50; i <= 50; i += 10) {
      for (let j = -50; j <= 50; j += 10) {
        // const k = 0
        for (let k = -50; k <= 50; k += 50) {
          if (i === 0 && j === 0 && k === 0) {
            continue
          }
          const textGeo = new THREE.TextGeometry('' + i + ',' + j + ',' + k, {
            font,
            size: 0.5,
            height: 0.1
          })
          const textMesh = new THREE.Mesh(textGeo, materials)
          textMesh.position.set(i, j, k)
          scene.add(textMesh)
        }
      }
    }

    function animate () {
      requestAnimationFrame(animate)

      controls.update(1)

      cube.rotation.x += 0.01
      cube.rotation.y += 0.01

      renderer.render(scene, camera)
    }
    animate()

    // npm demo
    // const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10)
    // camera.position.z = 1

    // const scene = new THREE.Scene()

    // const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
    // const material = new THREE.MeshNormalMaterial()

    // const mesh = new THREE.Mesh(geometry, material)
    // scene.add(mesh)

    // const renderer = new THREE.WebGLRenderer({ antialias: true })
    // renderer.setSize(window.innerWidth, window.innerHeight)

    // function animation(time) {
    //   mesh.rotation.x = time / 2000
    //   mesh.rotation.y = time / 1000

    //   renderer.render(scene, camera)
    // }
    // renderer.setAnimationLoop(animation)
    // document.body.appendChild(renderer.domElement)
  }
}
</script>

<style scoped>

</style>
