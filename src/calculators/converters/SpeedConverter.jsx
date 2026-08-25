import GenericUnitConverter from './GenericUnitConverter.jsx';

// Base unit: meters per second.
const units = {
  mps: { label: 'Meters per Second (m/s)', toBase: 1 },
  kmph: { label: 'Kilometers per Hour (km/h)', toBase: 1 / 3.6 },
  mph: { label: 'Miles per Hour (mph)', toBase: 0.44704 },
  fps: { label: 'Feet per Second (ft/s)', toBase: 0.3048 },
  knot: { label: 'Knots (kn)', toBase: 0.514444444 },
};

export default function SpeedConverter() {
  return <GenericUnitConverter units={units} placeholder="e.g. 100" />;
}
