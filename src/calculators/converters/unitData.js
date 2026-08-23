// Unit conversion definitions. Length/weight use a factor-to-base-unit approach;
// temperature needs custom formulas since it isn't a simple multiplicative scale.
export const unitCategories = {
  length: {
    label: 'Length',
    baseUnit: 'meter',
    units: {
      millimeter: { label: 'Millimeter (mm)', toBase: 0.001 },
      centimeter: { label: 'Centimeter (cm)', toBase: 0.01 },
      meter: { label: 'Meter (m)', toBase: 1 },
      kilometer: { label: 'Kilometer (km)', toBase: 1000 },
      inch: { label: 'Inch (in)', toBase: 0.0254 },
      foot: { label: 'Foot (ft)', toBase: 0.3048 },
      yard: { label: 'Yard (yd)', toBase: 0.9144 },
      mile: { label: 'Mile (mi)', toBase: 1609.344 },
    },
  },
  weight: {
    label: 'Weight',
    baseUnit: 'kilogram',
    units: {
      milligram: { label: 'Milligram (mg)', toBase: 0.000001 },
      gram: { label: 'Gram (g)', toBase: 0.001 },
      kilogram: { label: 'Kilogram (kg)', toBase: 1 },
      tonne: { label: 'Tonne (t)', toBase: 1000 },
      ounce: { label: 'Ounce (oz)', toBase: 0.0283495 },
      pound: { label: 'Pound (lb)', toBase: 0.453592 },
    },
  },
  temperature: {
    label: 'Temperature',
    units: {
      celsius: { label: 'Celsius (°C)' },
      fahrenheit: { label: 'Fahrenheit (°F)' },
      kelvin: { label: 'Kelvin (K)' },
    },
  },
};

export function convertTemperature(value, from, to) {
  let celsius;
  switch (from) {
    case 'celsius':
      celsius = value;
      break;
    case 'fahrenheit':
      celsius = ((value - 32) * 5) / 9;
      break;
    case 'kelvin':
      celsius = value - 273.15;
      break;
    default:
      throw new Error('Unknown unit');
  }

  switch (to) {
    case 'celsius':
      return celsius;
    case 'fahrenheit':
      return (celsius * 9) / 5 + 32;
    case 'kelvin':
      return celsius + 273.15;
    default:
      throw new Error('Unknown unit');
  }
}
