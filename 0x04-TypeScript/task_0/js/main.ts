export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studenta: Student = {
    firstName: 'Ayub',
    lastName: 'Sheikh',
    age: 22,
    location: 'Nairobi',
}

const studentb: Student = {
    firstName: 'Ibrahim',
    lastName: 'Mohammed',
    age: 20,
    location: 'Thika'
}

const studentList: Array<Student> = [
    studenta,
    studentb
]

const table = document.getElementById('studentTable');

studentList.forEach(student => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = student.firstName;

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;

    row.appendChild(nameCell);
    row.appendChild(locationCell);

    table.appendChild(row);
})