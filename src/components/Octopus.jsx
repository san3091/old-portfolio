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
    camera.position.z = 40

    // LIGHTS
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0xf9afff, 0.5)
    pointLight.position.set(15, 10, 10)
    scene.add(pointLight)

    // OBJECTS
    const radius = 12
    const tubeRadius = 4

    const geometry = new THREE.TorusKnotGeometry(radius, tubeRadius, 20, 4)
    const material = new THREE.MeshLambertMaterial({
      wireframe: true,
      wireframeLinewidth: 3,
      color: 0x454545
    })

    const knot1 = new THREE.Mesh(geometry, material)
    knot1.rotation.x += 1.4
    scene.add(knot1)

    const renderScene = () => {
      renderer.render(scene, camera)
    }

    const animate = () => {
      knot1.rotation.x += 0.01
      knot1.rotation.y += 0.02
      knot1.rotation.z += 0.03

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
      scene.remove(knot1)
      geometry.dispose()
      material.dispose()
    }
  }, [])

  return <div className={stylingClass} ref={mount} />
}
