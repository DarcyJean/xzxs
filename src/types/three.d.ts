declare namespace THREE {
  class Scene {
    add(...objects: any[]): this
    remove(...objects: any[]): this
  }
  class PerspectiveCamera {
    constructor(fov: number, aspect: number, near: number, far: number)
    position: { z: number }
    aspect: number
    updateProjectionMatrix(): void
  }
  class WebGLRenderer {
    constructor(params: { canvas: HTMLCanvasElement; alpha?: boolean; antialias?: boolean })
    setSize(width: number, height: number): void
    setPixelRatio(ratio: number): void
    render(scene: Scene, camera: PerspectiveCamera): void
    dispose(): void
  }
  class BufferGeometry {
    setAttribute(name: string, attribute: BufferAttribute): this
    dispose(): void
  }
  class BufferAttribute {
    constructor(array: Float32Array, itemSize: number)
  }
  class PointsMaterial {
    constructor(params?: any)
    dispose(): void
  }
  class Points {
    constructor(geometry: BufferGeometry, material: PointsMaterial)
    rotation: { x: number; y: number }
  }
  class MeshBasicMaterial {
    constructor(params?: any)
    opacity: number
    dispose(): void
  }
  class MeshStandardMaterial {
    constructor(params?: any)
    dispose(): void
  }
  class Mesh {
    constructor(geometry: any, material: any)
    position: { set(x: number, y: number, z: number): void; y: number; copy(v: any): void }
    rotation: { x: number; y: number; z: number }
    scale: { set(x: number, y: number, z: number): void }
    userData: any
    geometry: any
    material: any
  }
  class Group {
    position: { set(x: number, y: number, z: number): void; x: number; y: number; z: number }
    rotation: { x: number; y: number; z: number }
    add(...objects: any[]): this
    traverse(callback: (child: any) => void): void
  }
  class SphereGeometry {
    constructor(radius: number, widthSegments: number, heightSegments: number)
    dispose(): void
  }
  class BoxGeometry {
    constructor(width: number, height: number, depth: number)
    dispose(): void
  }
  class CylinderGeometry {
    constructor(radiusTop: number, radiusBottom: number, height: number, segments: number)
    dispose(): void
  }
  class TorusGeometry {
    constructor(radius: number, tube: number, radialSegments: number, tubularSegments: number)
    dispose(): void
  }
  class TorusKnotGeometry {
    constructor(radius: number, tube: number, tubularSegments: number, radialSegments: number)
    dispose(): void
  }
  class IcosahedronGeometry {
    constructor(radius: number, detail: number)
    dispose(): void
  }
  class OctahedronGeometry {
    constructor(radius: number)
    dispose(): void
  }
  class TetrahedronGeometry {
    constructor(radius: number)
    dispose(): void
  }
  class RingGeometry {
    constructor(innerRadius: number, outerRadius: number, segments: number)
    dispose(): void
  }
  class PointLight {
    constructor(color: number, intensity: number, distance: number)
    position: { set(x: number, y: number, z: number): void }
    intensity: number
  }
  class AmbientLight {
    constructor(color: number, intensity: number)
  }
  class Clock {
    getElapsedTime(): number
  }
  const AdditiveBlending: number
  const DoubleSide: number
  interface Material {
    dispose(): void
    opacity?: number
  }
}
