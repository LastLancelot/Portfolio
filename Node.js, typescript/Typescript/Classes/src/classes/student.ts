import { Person } from "../classes/person";
import { Sex } from "../enum/enums";
import { Faculty } from "./faculty";
import { Subject, InfoSubject } from "./subjects"
import { withStars, formatPhone } from "../decorators";

function logStudent(target: any) {
    console.log(`New ${target.name} is ready to !EMOTIONAL DAMAGE!.`);
}

@logStudent
export class Student extends Person{
    @formatPhone
    private phone?: string | number;
    constructor(
        public firstName: string,
        public secondName: string,
        public age: number,
        public sex: Sex,
        public group: string,
        public faculty: Faculty,
        public grades: Record<Subject, InfoSubject>,
        phone?: string | number
    ) {
        super(firstName, secondName, age, sex);
        this.phone = phone;
    }

    @withStars
    public print() {
        console.log(`Full name: ${this.secondName} ${this.firstName}`);
        console.log(`Age: ${this.age}`);
        console.log(`Sex: ${this.sex}`);
        console.log(`Group: ${this.group}`);
        console.log("Subject and grade:");
        for (let i = 0; i < Object.keys(this.grades).length; i++){
            console.log(`Subject: ${Object.keys(this.grades)[i]}`)
            console.log(`Grade in ${Object.keys(this.grades)[i]} ${this.grades[Object.keys(this.grades)[i]].getGradeIfExist()}`)
        }
        if (typeof this.phone !== undefined) {
            console.log(`Phone: ${this.phone}`);
        }
    }

    public getAvarangeMark():number {
        var avarangeGrade: number = 0;
        for(let i = 0; i < Object.keys(this.grades).length; i++ ) {
            let grade = this.grades[Object.keys(this.grades)[i]].getGradeIfExist();
            if (typeof grade !== "number") {
                grade = 0;
            }
            else {
                avarangeGrade += grade;
            }
        }
        return avarangeGrade;
    }

    @withStars
    public callToFacultyOffice(reason: string) {
        if (typeof this.faculty.phone === "string") {
            console.log(`*** Calling ${this.faculty.phone} ***`)
            console.log(`I'm student of ${this.faculty.name}, group ${this.group}, calling you to tell about ${reason}`)
        }
        else {
            console.log(`*** Calling +${this.faculty.phone} ***`)
            console.log(`I'm student of ${this.faculty.name}, group ${this.group}, calling you to tell about ${reason}`)
        }
    }

}