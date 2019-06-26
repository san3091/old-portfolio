import React from 'react'
import * as THREE from "three"

export default ({ stylingClass }) => {
  const {useRef, useEffect} = React
  const mount = useRef(null)

  // similar to componentDidMount!
  useEffect(() => {
    let width = mount.current.clientWidth
    let height = mount.current.clientHeight
    let frameId

    // RENDERER
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setClearColor(0xffffff)
    renderer.setSize(width, height)

    // SCENE
    const scene = new THREE.Scene()

    // CAMERA
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 22

    // LIGHTS
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0xf9afff, 0.5)
    pointLight.position.set(15, 10, 10)
    scene.add(pointLight)

    // OBJECTS
    const boxLength = 25
    const boxWidth = 3
    const boxHeight = 3

    const geometry = new THREE.BoxGeometry(boxLength, boxHeight, boxWidth)
    const material = new THREE.MeshLambertMaterial({
      wireframe: true,
      wireframeLinewidth: 3,
      color: 0x454545
    })

    const box = new THREE.Mesh(geometry, material)
    box.rotation.x += 1.4
    scene.add(box)

    const box2 = new THREE.Mesh(geometry, material)
    box2.rotation.y += 1.4
    scene.add(box2)

    const box3 = new THREE.Mesh(geometry, material)
    box3.rotation.z += 1.4
    scene.add(box3)

    const renderScene = () => {
      renderer.render(scene, camera)
    }

    const animate = () => {
      box.rotation.x += 0.01
      box.rotation.y += 0.02
      box.rotation.z += 0.03

      box2.rotation.x += 0.03
      box2.rotation.y += 0.01
      box2.rotation.z += 0.02

      box3.rotation.x += 0.02
      box3.rotation.y += 0.03
      box3.rotation.z += 0.01

      renderScene()
      frameId = window.requestAnimationFrame(animate)
    }

    const start = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(animate)
      }
    }

    const stop = () => {
      window.cancelAnimationFrame(frameId)
      frameId = null
    }

    mount.current.appendChild(renderer.domElement)
    start()

    return () => {
      stop()
      scene.remove(box)
      geometry.dispose()
      material.dispoase()
    }
  }, [])

  return <div className={stylingClass} ref={mount} />
}
