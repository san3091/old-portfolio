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
    camera.position.z = 43

    // LIGHTS
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0xf9afff, 0.5)
    pointLight.position.set(15, 10, 10)
    scene.add(pointLight)

    // OBJECTS
    const radius = 25

    const icosahedronGeometry = new THREE.IcosahedronGeometry(radius)
    const dodecahedronGeometry = new THREE.DodecahedronGeometry(radius)
    const material = new THREE.MeshLambertMaterial({
      wireframe: true,
      wireframeLinewidth: 3,
      color: 0x454545
    })

    const icosahedron= new THREE.Mesh(icosahedronGeometry, material)
    icosahedron.rotation.x += 1.4
    scene.add(icosahedron)

    const dodecahedron = new THREE.Mesh(dodecahedronGeometry, material)
    scene.add(dodecahedron)

    const renderScene = () => {
      renderer.render(scene, camera)
    }

    const animate = () => {
      icosahedron.rotation.x += 0.01
      icosahedron.rotation.y += 0.02
      icosahedron.rotation.z += 0.03

      dodecahedron.rotation.x += 0.02
      dodecahedron.rotation.y += 0.03
      dodecahedron.rotation.z += 0.01

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
      scene.remove(icosahedron)
      icosahedronGeometry.dispose()
      dodecahedronGeometry.dispose()
      material.dispose()
    }
  }, [])

  return <div className={stylingClass} ref={mount} />
}
