interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 23,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    location: "New York"
};  

const studentsList: Array<Student> = [student1, student2];
const table: HTMLTableElement = document.createElement("table");
document.body.appendChild(table);

studentsList.forEach((student) => {
    const row: HTMLTableRowElement = table.insertRow();
    const cell1: HTMLTableCellElement = row.insertCell();
    const cell2: HTMLTableCellElement = row.insertCell();

    cell1.textContent = student.firstName;
    cell2.textContent = student.lastName;
});