import GenericUnitConverter from './GenericUnitConverter.jsx';

// Base unit: square meter.
const units = {
  sqMillimeter: { label: 'Square Millimeter (mm²)', toBase: 0.000001 },
  sqCentimeter: { label: 'Square Centimeter (cm²)', toBase: 0.0001 },
  sqMeter: { label: 'Square Meter (m²)', toBase: 1 },
  hectare: { label: 'Hectare (ha)', toBase: 10000 },
  sqKilometer: { label: 'Square Kilometer (km²)', toBase: 1000000 },
  sqInch: { label: 'Square Inch (in²)', toBase: 0.00064516 },
  sqFoot: { label: 'Square Foot (ft²)', toBase: 0.09290304 },
  sqYard: { label: 'Square Yard (yd²)', toBase: 0.83612736 },
  acre: { label: 'Acre', toBase: 4046.8564224 },
  sqMile: { label: 'Square Mile (mi²)', toBase: 2589988.110336 },
};

export default function AreaConverter() {
  return <GenericUnitConverter units={units} placeholder="e.g. 500" />;
}
