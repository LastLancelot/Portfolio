import { Student } from "./student";
import { Subject } from "./subjects";
import { Teacher } from "./teacher";


export class Group {
    constructor(
        public name: string,
        public students: Student[],
        public teachers: Teacher[],
        public subjects: Subject[],
    ) {}

    public addStudent(student:Student) {
        this.students.push(student);
    }

    public addTeacher(teacher:Teacher) {
        this.teachers.push(teacher);
    }
}