import { Sex, Degree } from "../enum/enums";
import { Person } from "../classes/person";
import { Student } from "../classes/student"
import { Faculty } from "./faculty";
import { University } from "./university";
import { Group } from "./group";
import { withStars, logGetter, logSetter, formatPhone } from "../decorators";
import { Subject } from "./subjects";


export type Reprimand = {
    description: string;
    priority: number;
    sendedBy: Student | Teacher;
}

export class Teacher extends Person {
    @formatPhone
    protected phone?: string | number;
    constructor(
        public firstName: string,
        public secondName: string,
        public age: number,
        public sex: Sex,
        public groups: Group[],
        public degree: Degree,
        public reprimand: Reprimand[],
        public faculty: Faculty,
        protected salary: number,
        public subject: Subject,
        protected isSalaryReview?: boolean,        
        phone?: string | number,
    ) {
        super(firstName, secondName, age, sex);
        this.phone = phone
    }

    public print() {
        console.log(`Full name: ${this.secondName} ${this.firstName}`);
        console.log(`Age: ${this.age}`);
        console.log(`Sex: ${this.sex}`);
        console.log("Teacher`s groups: ")
        for(let i = 0; i < this.groups.length; i++) {
            console.log(this.groups[i])
        }
    }
    
    @logGetter
    get _salary(): number{
        return this.salary
    }

    
    set _salary(newSalary: number) {
        this.salary = newSalary;
    }

    @logSetter
    @formatPhone
    set _phone(_phone: string | number) {
        
        this.phone = _phone;
    }


    public askForSalaryReview(_faculty: Faculty, recomendation: boolean) {

        this.salary = _faculty.updateSalary(this, recomendation);
    }

    @withStars
    public tryBecomeDecan(faculty: Faculty, recomendation: boolean): boolean {
        if(this.faculty !== faculty) {
            console.log("It`s not your faculty");
            return false;
        }
        else{
            if (this.degree === Degree.Professor && recomendation === true && typeof this.faculty.decan === undefined) {
                console.log("ALL HAIL NEW DECAN")
                this.salary = 30000;
                this.getElected();
                return true;
            }
        }
        console.log("Not all requirements are complite")
        return false;
    }


    private getElected(): Decan {
        const decan = new Decan(this.firstName, this.secondName, this.age, this.sex, this.groups, this.faculty, this.subject)
        return decan;
    }

    @withStars
    public teach(groupName: string) {
        console.log("Lesson is starting")
        this.groups.forEach((group) => {
            if (group.name === groupName ) {
                group.students.forEach((student) => {
                    console.log(`teaching ${student.secondName} ${student.firstName}`);
                })
            }
        })
    }
}

export class Decan extends Teacher {

    constructor(
        public firstName: string,
        public secondName: string,
        public age: number,
        public sex: Sex,
        public groups: Group[],
        public faculty: Faculty,
        public subject: Subject
    ) {
        super(firstName, secondName, age, sex, groups, Degree.Professor, [], faculty, 30000, subject, true, faculty.phone);
    }
}

export class Rector extends Teacher {
    constructor(
        public firstName: string,
        public secondName: string,
        public age: number,
        public sex: Sex,
        public groups: Group[],
        public faculty: Faculty,
        public subject: Subject
    ) {
        super(firstName, secondName, age, sex, groups, Degree.Professor, [], faculty, 60000, subject, true, faculty.phone);
    }

    private stealMoney(university:University): never {
        university.rektorTryToSteal(true);
        throw new Error("RECKTOR IS STEALING MONEY, GET FIRED THEAF")
    }
}