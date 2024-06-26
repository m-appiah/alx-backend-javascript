interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

const teacher: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    location: "London",
    contract: true,
};

interface Directors extends Teacher {
    numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}. ${lastName}`;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const director: Directors = {
    firstName: "Jane",
    lastName: "Smith",
    fullTimeEmployee: true,
    location: "London",
    numberOfReports: 17,
};

const teacherName: printTeacherFunction = printTeacher;
console.log(teacherName(teacher.firstName, teacher.lastName));

interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
}

interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}
const StudentConstructor: StudentConstructor = StudentClass;
const student: StudentClassInterface = new StudentConstructor("John", "Doe");
console.log(student.workOnHomework());
console.log(student.displayName());