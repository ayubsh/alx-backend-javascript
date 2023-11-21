const fs = require('fs');

function countStudents(filepath) {
  if (!fs.existsSync(filepath) || !fs.statSync(filepath).isFile()) {
    throw new Error('Cannot load the database');
  }

  const data = fs
    .readFileSync(filepath, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');
  const fields = data[0].split(',');
  const studentPropNames = fields.slice(0, fields.length - 1);

  const sgroups = {};

  for (const record of data.slice(1)) {
    const srecord = record.split(',');
    const spropsval = srecord.slice(0, srecord.length - 1);
    const field = srecord[srecord.length - 1];
    if (!Object.keys(sgroups).includes(field)) {
      sgroups[field] = [];
    }
    const studentEntries = studentPropNames
      .map((propName, indx) => [propName, spropsval[indx]]);
    sgroups[field].push(Object.fromEntries(studentEntries));
  }

  const totalStudents = Object
    .values(sgroups)
    .reduce((pre, cur) => (pre || []).length + cur.length);
  console.log(`Number of students: ${totalStudents}`);
  for (const [field, group] of Object.entries(sgroups)) {
    const snames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${snames}`);
  }
}

module.exports = countStudents;
