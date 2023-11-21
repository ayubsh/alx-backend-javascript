const fs = require('fs');

const countStudents = (filepath) => new Promise((resolve, reject) => {
  fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) reject(new Error('Cannot load the database'));

    if (data) {
      const flines = data
        .toString('utf-8')
        .trim()
        .split('\n');
      const fields = flines[0].split(',');
      const studentPropNames = fields.slice(0, fields.length - 1);

      const sgroups = {};

      for (const record of flines.slice(1)) {
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
      resolve(true);
    }
  });
});

module.exports = countStudents;
