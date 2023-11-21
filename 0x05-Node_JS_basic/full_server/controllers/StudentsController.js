const readdb = require('../utils');

const majors = ['CS', 'SWE'];

class StudentController {
	static getAllStudents(req, res) {
		const rst = ['This is the list of our students'];
		readdb(process.argv[2]).then(resp => {
			for (const [f, g] of Object.entries(resp)){
				rst.push([
					`Number of students in ${f}: ${g.length}.`,
					'List:',
					g.map(s => s.firstname).join(', '),
				].join(' '));
			}

			res.status(200).send(rst.join('\n'));
		}).catch(err => {
				rst.push(err instanceof Error ? err.message : err.toString());

				const rrp = rst.join('\n');
				res.send(rrp);
		});
	}


	static getAllStudentsByMajor(req, res) {
		const major = req.params.major;
		if (!majors.includes(major)) {
			res.status(500).send('Major parameter must be CS or SWE');
			return
		}

		readdb(process.argv[2]).then(resp => {
			let restext = "";

			if (Object.keys(resp).includes(major)) {
				const g = resp[major];
				restext = `List: ${g.map(s => s.firstname).join(', ')}`;
			}

			res.status(200).send(restext);

		}).catch(err => {
				res.status(500).send(err instanceof Error ? err.message : err.toString());
		});
	}
}


export default StudentController;
module.exports = StudentController;
