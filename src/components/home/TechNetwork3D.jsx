import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// ─── Math helpers ────────────────────────────────────────────────────
const TAU = Math.PI * 2

export default function DigitalEcosystem() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // ── Scene / Camera / Renderer ──────────────────────────────────
    const scene = new THREE.Scene()
    const W = container.clientWidth  || 450
    const H = container.clientHeight || 450

    const camera = new THREE.PerspectiveCamera(36, W / H, 0.1, 60)
    camera.position.set(0, 1.2, 10.5)
    camera.lookAt(0, 0, 0)

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    })
    renderer.setSize(W, H)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.3
    container.appendChild(renderer.domElement)

    // ── Lighting — cool indigo studio ──────────────────────────────
    scene.add(new THREE.AmbientLight(0xc7d2fe, 1.6))

    const key = new THREE.DirectionalLight(0xffffff, 3.2)
    key.position.set(7, 9, 8)
    scene.add(key)

    const fill = new THREE.DirectionalLight(0x818cf8, 2.6)
    fill.position.set(-8, -3, 6)
    scene.add(fill)

    const rim = new THREE.DirectionalLight(0x6366f1, 2.8)
    rim.position.set(0, 6, -6)
    scene.add(rim)

    const corePoint = new THREE.PointLight(0xa5b4fc, 5.0, 10)
    corePoint.position.set(0, 0, 1.5)
    scene.add(corePoint)

    // ── Reusable material factories ────────────────────────────────
    const glassMat = (color = 0xc7d2fe, opacity = 0.78, transmission = 0.70) =>
      new THREE.MeshPhysicalMaterial({
        color,
        roughness: 0.05,
        metalness: 0.0,
        transmission,
        ior: 1.5,
        thickness: 0.5,
        transparent: true,
        opacity,
        reflectivity: 0.6,
        clearcoat: 1.0,
        clearcoatRoughness: 0.04,
        side: THREE.DoubleSide,
      })

    const glowLineMat = (color = 0x818cf8, opacity = 0.55) =>
      new THREE.LineBasicMaterial({
        color,
        transparent: true,
        opacity,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })

    // ── Glow sprite factory ─────────────────────────────────────────
    const makeGlowTex = (inner = 'rgba(165,180,252,1)', outer = 'rgba(99,102,241,0)') => {
      const c = document.createElement('canvas')
      c.width = c.height = 128
      const ctx = c.getContext('2d')
      const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 58)
      g.addColorStop(0, inner)
      g.addColorStop(0.3, inner.replace('1)', '0.7)'))
      g.addColorStop(0.7, inner.replace('1)', '0.15)'))
      g.addColorStop(1, outer)
      ctx.fillStyle = g
      ctx.fillRect(0, 0, 128, 128)
      return new THREE.CanvasTexture(c)
    }

    const glowSprite = (scale = 0.6, color = 'rgba(165,180,252,1)') => {
      const mat = new THREE.SpriteMaterial({
        map: makeGlowTex(color),
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        opacity: 0.75,
      })
      const s = new THREE.Sprite(mat)
      s.scale.setScalar(scale)
      return s
    }

    // ═══════════════════════════════════════════════════════════════
    // 1. CENTRAL CORE — glowing wireframe icosahedron + pulsing orb
    // ═══════════════════════════════════════════════════════════════
    const coreGroup = new THREE.Group()
    scene.add(coreGroup)

    // Outer wireframe cage
    const icoGeo = new THREE.IcosahedronGeometry(1.05, 1)
    const icoWire = new THREE.WireframeGeometry(icoGeo)
    const icoMesh = new THREE.LineSegments(
      icoWire,
      glowLineMat(0x818cf8, 0.55)
    )
    coreGroup.add(icoMesh)

    // Inner solid translucent ico
    const icoSolid = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.78, 0),
      glassMat(0xc7d2fe, 0.45, 0.82)
    )
    coreGroup.add(icoSolid)

    // Glowing nucleus orb
    const orbGeo = new THREE.SphereGeometry(0.30, 32, 32)
    const orbMat = new THREE.MeshStandardMaterial({
      color: 0xa5b4fc,
      emissive: 0x6366f1,
      emissiveIntensity: 1.4,
      roughness: 0.05,
      metalness: 0.1,
      transparent: true,
      opacity: 0.90,
    })
    coreGroup.add(new THREE.Mesh(orbGeo, orbMat))

    // Halo glow sprite behind core
    const coreHalo = glowSprite(3.2, 'rgba(99,102,241,1)')
    scene.add(coreHalo)

    // ═══════════════════════════════════════════════════════════════
    // 2. ORBIT PATHS — thin elliptical glowing rings
    // ═══════════════════════════════════════════════════════════════
    // Each orbit: { rx, ry, tilt (x-rot), tilt (y-rot), color }
    const orbitDefs = [
      { rx: 2.80, ry: 1.70, rotX:  0.35, rotZ: 0.15, color: 0x818cf8 }, // App Dev
      { rx: 3.40, ry: 2.00, rotX: -0.55, rotZ: 0.30, color: 0x6366f1 }, // SaaS
      { rx: 2.60, ry: 1.90, rotX:  0.60, rotZ: -0.2, color: 0xa5b4fc }, // Marketing
      { rx: 3.10, ry: 1.55, rotX: -0.25, rotZ: -0.5, color: 0xc7d2fe }, // Content
    ]

    const ORBIT_SEGMENTS = 120
    const orbitPaths = orbitDefs.map(def => {
      const pts = []
      for (let i = 0; i <= ORBIT_SEGMENTS; i++) {
        const θ = (i / ORBIT_SEGMENTS) * TAU
        pts.push(new THREE.Vector3(def.rx * Math.cos(θ), def.ry * Math.sin(θ), 0))
      }
      const geo = new THREE.BufferGeometry().setFromPoints(pts)
      const mat = new THREE.LineBasicMaterial({
        color: def.color,
        transparent: true,
        opacity: 0.22,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
      const ring = new THREE.LineLoop(geo, mat)
      ring.rotation.x = def.rotX
      ring.rotation.z = def.rotZ
      scene.add(ring)
      return { ring, def }
    })

    // ═══════════════════════════════════════════════════════════════
    // 3. ORBITING SERVICE ELEMENTS
    // ═══════════════════════════════════════════════════════════════

    // ── Helper: edges overlay ────────────────────────────────────
    const withEdges = (geo, group, color = 0x818cf8) => {
      const eGeo = new THREE.EdgesGeometry(geo)
      const eMat = glowLineMat(color, 0.80)
      group.add(new THREE.LineSegments(eGeo, eMat))
    }

    // ─── SERVICE 1: App Development — faceted glass cube ──────────
    const appGroup = new THREE.Group()
    const appGeo = new THREE.BoxGeometry(0.55, 0.55, 0.55)
    appGroup.add(new THREE.Mesh(appGeo, glassMat(0xc7d2fe, 0.80)))
    withEdges(appGeo, appGroup, 0x818cf8)
    // Corner glow
    const appGlow = glowSprite(0.9, 'rgba(129,140,248,1)')
    appGroup.add(appGlow)
    scene.add(appGroup)

    // ─── SERVICE 2: SaaS / Cloud — 3 stacked translucent discs ───
    const saasGroup = new THREE.Group()
    const discGeo = new THREE.CylinderGeometry(0.42, 0.42, 0.07, 28)
    const discOffsets = [-0.18, 0, 0.18]
    discOffsets.forEach((dy, i) => {
      const d = new THREE.Mesh(
        discGeo,
        glassMat(i === 1 ? 0xddd6fe : 0xc7d2fe, 0.72 - i * 0.06, 0.68)
      )
      d.position.y = dy
      saasGroup.add(d)
      withEdges(discGeo, saasGroup, 0x6366f1)
    })
    const saasGlow = glowSprite(1.0, 'rgba(99,102,241,1)')
    saasGroup.add(saasGlow)
    scene.add(saasGroup)

    // ─── SERVICE 3: Digital Marketing — signal torus ring ─────────
    const mktGroup = new THREE.Group()
    const torusGeo = new THREE.TorusGeometry(0.36, 0.07, 14, 50)
    mktGroup.add(new THREE.Mesh(torusGeo, glassMat(0xa5b4fc, 0.82)))
    withEdges(torusGeo, mktGroup, 0xa5b4fc)
    // Secondary thin ring (signal wave)
    const torus2Geo = new THREE.TorusGeometry(0.52, 0.025, 8, 50)
    const torus2Mat = new THREE.MeshBasicMaterial({
      color: 0x818cf8, transparent: true, opacity: 0.45,
      blending: THREE.AdditiveBlending, depthWrite: false,
    })
    mktGroup.add(new THREE.Mesh(torus2Geo, torus2Mat))
    const mktGlow = glowSprite(1.0, 'rgba(165,180,252,1)')
    mktGroup.add(mktGlow)
    scene.add(mktGroup)

    // ─── SERVICE 4: Content Creation — glass tetra/play shard ─────
    const ctxGroup = new THREE.Group()
    const tetraGeo = new THREE.TetrahedronGeometry(0.48, 0)
    ctxGroup.add(new THREE.Mesh(tetraGeo, glassMat(0xe0e7ff, 0.78)))
    withEdges(tetraGeo, ctxGroup, 0xc7d2fe)
    const ctxGlow = glowSprite(0.9, 'rgba(199,210,254,1)')
    ctxGroup.add(ctxGlow)
    scene.add(ctxGroup)

    const orbiters = [
      {
        group: appGroup,
        orbitDef: orbitDefs[0],
        speed: TAU / 22,       // 22-sec orbit
        phase: 0.0,
        selfRotX: 0.008, selfRotY: 0.014, selfRotZ: 0.005,
      },
      {
        group: saasGroup,
        orbitDef: orbitDefs[1],
        speed: TAU / 28,       // 28-sec orbit
        phase: TAU * 0.28,
        selfRotX: 0.006, selfRotY: 0.004, selfRotZ: 0.010,
      },
      {
        group: mktGroup,
        orbitDef: orbitDefs[2],
        speed: TAU / 19,       // 19-sec orbit
        phase: TAU * 0.58,
        selfRotX: 0.012, selfRotY: 0.007, selfRotZ: 0.003,
      },
      {
        group: ctxGroup,
        orbitDef: orbitDefs[3],
        speed: TAU / 25,       // 25-sec orbit
        phase: TAU * 0.76,
        selfRotX: 0.005, selfRotY: 0.011, selfRotZ: 0.008,
      },
    ]

    // ═══════════════════════════════════════════════════════════════
    // 4. CONNECTION LINES — from core to each orbiter (dynamic)
    // ═══════════════════════════════════════════════════════════════
    const connMats = orbiters.map((_, i) =>
      glowLineMat(orbitDefs[i].color, 0.35)
    )
    const connLines = orbiters.map((_, i) => {
      const geo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, 0),
      ])
      const line = new THREE.Line(geo, connMats[i])
      scene.add(line)
      return line
    })

    // ═══════════════════════════════════════════════════════════════
    // 5. AMBIENT PARTICLES
    // ═══════════════════════════════════════════════════════════════
    const PCOUNT = 35
    const pPos = new Float32Array(PCOUNT * 3)
    const pBase = []; const pPh = []
    for (let i = 0; i < PCOUNT; i++) {
      const r = 2.2 + Math.random() * 3.2
      const th = Math.random() * TAU
      const ph = Math.acos(2 * Math.random() - 1)
      const x = r * Math.sin(ph) * Math.cos(th)
      const y = r * Math.sin(ph) * Math.sin(th)
      const z = r * Math.cos(ph)
      pPos[i*3]=x; pPos[i*3+1]=y; pPos[i*3+2]=z
      pBase.push(new THREE.Vector3(x, y, z))
      pPh.push(Math.random() * TAU)
    }
    const ptC = document.createElement('canvas')
    ptC.width = ptC.height = 64
    const ptX = ptC.getContext('2d')
    const ptG = ptX.createRadialGradient(32,32,0,32,32,28)
    ptG.addColorStop(0,'rgba(199,210,254,1)')
    ptG.addColorStop(0.5,'rgba(99,102,241,0.5)')
    ptG.addColorStop(1,'rgba(0,0,0,0)')
    ptX.fillStyle = ptG; ptX.fillRect(0,0,64,64)
    const pGeo = new THREE.BufferGeometry()
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3))
    scene.add(new THREE.Points(pGeo, new THREE.PointsMaterial({
      size: 0.065, map: new THREE.CanvasTexture(ptC),
      transparent: true, opacity: 0.65,
      blending: THREE.AdditiveBlending, depthWrite: false,
    })))

    // ═══════════════════════════════════════════════════════════════
    // ANIMATION LOOP
    // ═══════════════════════════════════════════════════════════════
    let raf
    const clock = new THREE.Clock()

    // Helper: get world position of orbiter at time t
    const getOrbitPos = (def, speed, phase, t) => {
      const θ = t * speed + phase
      // Position on tilted ellipse
      const local = new THREE.Vector3(def.rx * Math.cos(θ), def.ry * Math.sin(θ), 0)
      // Apply same tilt as the ring
      const euler = new THREE.Euler(def.rotX, 0, def.rotZ)
      const quat  = new THREE.Quaternion().setFromEuler(euler)
      local.applyQuaternion(quat)
      return local
    }

    const animate = () => {
      raf = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      // ── Central core slow self-rotation ──
      coreGroup.rotation.y += 0.0028
      coreGroup.rotation.x += 0.0012
      icoMesh.rotation.z   += 0.0008    // counter-rotate wire layer

      // ── Nucleus pulsing glow ──
      orbMat.emissiveIntensity = 1.2 + 0.5 * Math.sin(t * 1.6)
      corePoint.intensity      = 4.5 + 1.8 * Math.sin(t * 1.4)
      coreHalo.material.opacity = 0.25 + 0.12 * Math.sin(t * 1.2)

      // ── Orbiters: position on tilted ellipse + self-rotation ──
      orbiters.forEach((orb, i) => {
        const pos = getOrbitPos(orb.orbitDef, orb.speed, orb.phase, t)
        orb.group.position.copy(pos)
        orb.group.rotation.x += orb.selfRotX
        orb.group.rotation.y += orb.selfRotY
        orb.group.rotation.z += orb.selfRotZ

        // Update connection line from center to orbiter
        const lineGeo = connLines[i].geometry
        const linePos = lineGeo.attributes.position
        linePos.setXYZ(0, 0, 0, 0)
        linePos.setXYZ(1, pos.x, pos.y, pos.z)
        linePos.needsUpdate = true
        lineGeo.computeBoundingSphere()

        // Pulse connection line opacity
        connMats[i].opacity = 0.25 + 0.15 * Math.sin(t * 0.9 + i * 1.3)
      })

      // ── Orbit ring pulse ──
      orbitPaths.forEach(({ ring }, i) => {
        ring.material.opacity = 0.15 + 0.10 * Math.sin(t * 0.7 + i * 0.8)
      })

      // ── Particles drift ──
      const posAttr = pGeo.attributes.position
      for (let i = 0; i < PCOUNT; i++) {
        const b = pBase[i]; const ph = pPh[i]
        posAttr.setXYZ(
          i,
          b.x + Math.sin(t * 0.28 + ph) * 0.20,
          b.y + Math.cos(t * 0.22 + ph) * 0.24,
          b.z + Math.sin(t * 0.34 + ph) * 0.16,
        )
      }
      posAttr.needsUpdate = true

      renderer.render(scene, camera)
    }
    animate()

    // ── Responsive resize ─────────────────────────────────────────
    const ro = new ResizeObserver(() => {
      if (!container) return
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })
    ro.observe(container)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      if (container.contains(renderer.domElement))
        container.removeChild(renderer.domElement)
      renderer.dispose()
      scene.clear()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none select-none"
      style={{
        width:  'clamp(280px, 40vw, 460px)',
        height: 'clamp(280px, 40vw, 460px)',
        background: 'transparent',
        flexShrink: 0,
      }}
    />
  )
}
