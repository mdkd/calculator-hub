import { useState } from 'react';
import ResultCard from '../../components/ResultCard.jsx';

const GRADE_POINTS = {
  'A+': 4.0,
  A: 4.0,
  'A-': 3.7,
  'B+': 3.3,
  B: 3.0,
  'B-': 2.7,
  'C+': 2.3,
  C: 2.0,
  'C-': 1.7,
  'D+': 1.3,
  D: 1.0,
  F: 0.0,
};

let nextId = 1;
function newCourse() {
  return { id: nextId++, name: '', grade: 'A', credits: '' };
}

export default function GPACalculator() {
  const [courses, setCourses] = useState([newCourse(), newCourse()]);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const updateCourse = (id, field, value) => {
    setCourses((cs) => cs.map((c) => (c.id === id ? { ...c, [field]: value } : c)));
  };

  const addCourse = () => setCourses((cs) => [...cs, newCourse()]);
  const removeCourse = (id) => setCourses((cs) => cs.filter((c) => c.id !== id));

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    let totalPoints = 0;
    let totalCredits = 0;

    for (const course of courses) {
      const credits = parseFloat(course.credits);
      if (course.credits === '' || isNaN(credits) || credits <= 0) {
        setError('Every course needs positive credit hours.');
        return;
      }
      totalPoints += GRADE_POINTS[course.grade] * credits;
      totalCredits += credits;
    }

    if (totalCredits === 0) {
      setError('Add at least one course.');
      return;
    }

    setResult((totalPoints / totalCredits).toFixed(2));
  };

  return (
    <div className="calculator">
      <form onSubmit={handleSubmit} className="calculator-form">
        {courses.map((course, idx) => (
          <div className="field-row gpa-row" key={course.id}>
            <label>
              Course {idx + 1}
              <input
                type="text"
                value={course.name}
                onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                placeholder="(optional)"
              />
            </label>
            <label>
              Grade
              <select value={course.grade} onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}>
                {Object.keys(GRADE_POINTS).map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Credits
              <input
                type="number"
                min="0"
                step="any"
                value={course.credits}
                onChange={(e) => updateCourse(course.id, 'credits', e.target.value)}
                placeholder="e.g. 3"
              />
            </label>
            {courses.length > 1 && (
              <button type="button" className="remove-btn" onClick={() => removeCourse(course.id)}>
                ✕
              </button>
            )}
          </div>
        ))}

        <button type="button" className="secondary-btn" onClick={addCourse}>
          + Add Course
        </button>
        <button type="submit">Calculate GPA</button>
      </form>

      {error && <p className="error-text">{error}</p>}

      {result && (
        <ResultCard>
          <h3>Your GPA: {result}</h3>
        </ResultCard>
      )}
    </div>
  );
}
