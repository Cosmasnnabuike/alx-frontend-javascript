// write an interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// create two students
const student1: Student = {
  firstName: 'Jude',
  lastName: 'Joy',
  age: 30,
  location: 'Nigeria'
};

const student2: Student = {
  firstName: 'Ada',
  lastName: 'Obi',
  age: 20,
  location: 'Ghana'
};

// create an array named studentsList
const studentsList: Student[] = [student1, student2];

// Render table using Vanilla JavaScript
const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.style.background = "pink";
table.appendChild(tbody);

// append a new row to the table
studentsList.forEach((student: Student): void => {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  nameCell.style.border = "1px solid pink";
  locationCell.style.border = "1px solid pink";
  nameCell.style.padding = "5px";
  locationCell.style.padding = "5px";

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});


document.body.appendChild(table);
