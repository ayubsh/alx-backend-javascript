export default function updateStudentGradeByCity(arr, filval, newgr) {
  let defval = 'N/A';
  return arr
    .filter((students) => students.location === filval)
    .map((student) => {
      const grade = newgr.find((g) => g.studentId === student.id);
      if (grade) defval = grade.grade;
      return {
        ...student,
        grade: defval,
      };
    });
}
