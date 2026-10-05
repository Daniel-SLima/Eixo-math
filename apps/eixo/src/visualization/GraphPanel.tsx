import { Coordinates, Mafs, Plot } from 'mafs'
import 'mafs/core.css'

export default function GraphPanel() {
  return <div className="graph"><Mafs height={220} viewBox={{ x: [-3, 3], y: [-1, 5] }}><Coordinates.Cartesian /><Plot.OfX y={x => x * x} color="#4f46e5" /></Mafs></div>
}
