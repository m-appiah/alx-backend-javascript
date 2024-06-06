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
    fullTimeEmployee: false,
    location: "London",
    contract: false,
};

console.log(teacher);