import GenericUnitConverter from './GenericUnitConverter.jsx';

// Base unit: liter.
const units = {
  milliliter: { label: 'Milliliter (mL)', toBase: 0.001 },
  liter: { label: 'Liter (L)', toBase: 1 },
  cubicMeter: { label: 'Cubic Meter (m³)', toBase: 1000 },
  cubicFoot: { label: 'Cubic Foot (ft³)', toBase: 28.316846592 },
  usGallon: { label: 'US Gallon (gal)', toBase: 3.785411784 },
  usQuart: { label: 'US Quart (qt)', toBase: 0.946352946 },
  usCup: { label: 'US Cup (cup)', toBase: 0.2365882365 },
  usFluidOunce: { label: 'US Fluid Ounce (fl oz)', toBase: 0.0295735295625 },
  imperialGallon: { label: 'Imperial Gallon (UK gal)', toBase: 4.54609 },
};

export default function VolumeConverter() {
  return <GenericUnitConverter units={units} placeholder="e.g. 10" />;
}
