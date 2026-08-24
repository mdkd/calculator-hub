// Parses a "YYYY-MM-DD" input value (from <input type="date">) as a LOCAL date.
// `new Date("YYYY-MM-DD")` parses that string as UTC midnight, which shifts the
// displayed date by a day for any timezone west of UTC once local getters
// (getFullYear/getMonth/getDate) are used — this avoids that bug.
export function parseLocalDate(dateString) {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
}

// Formats a Date's LOCAL calendar date as "YYYY-MM-DD". Deliberately not
// `date.toISOString()`, which converts to UTC first and can shift the date by
// a day for any timezone that isn't UTC.
export function formatIsoLocal(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
