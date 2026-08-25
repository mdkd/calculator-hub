import GenericUnitConverter from './GenericUnitConverter.jsx';

// Base unit: second. Month and year use fixed average lengths (see content
// notes) since calendar months/years don't have one exact fixed duration.
const units = {
  second: { label: 'Seconds', toBase: 1 },
  minute: { label: 'Minutes', toBase: 60 },
  hour: { label: 'Hours', toBase: 3600 },
  day: { label: 'Days', toBase: 86400 },
  week: { label: 'Weeks', toBase: 604800 },
  month: { label: 'Months (avg.)', toBase: 2629800 },
  year: { label: 'Years (365.25 days)', toBase: 31557600 },
};

export default function TimeUnitConverter() {
  return <GenericUnitConverter units={units} placeholder="e.g. 3600" />;
}
