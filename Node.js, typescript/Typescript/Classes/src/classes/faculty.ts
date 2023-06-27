import {Teacher, Decan, Reprimand} from "../classes/teacher"
import { maxSalary } from "../enum/enums"
import { Student } from "./student";
import { withStars } from "../decorators";
import { University } from "./university";

function logFaculty(target: any) {
    console.log(`new ${target.name} faculty was added to university`);
}

@logFaculty
export class Faculty {

    constructor(
        public name: string,
        public location: string,
        public phone: string | number,
        public teachers: Teacher[],
        public students: Student[],
        public groups: string[],
        public budget: number,
        public university: University,
        public decan?: Decan
    ) {}

    @withStars
    public fullInformation() {
        console.log(`Name of faculty: ${this.name}`);
        console.log(`Faculty's location: ${this.location}`);
        console.log(`Faculty's phone: ${this.phone}`);

        console.log("List of teachers");
        this.teachers.forEach((teacher) => {
            console.log(`Teacher ${teacher}`);
        })

        console.log("List of student");
        this.students.forEach((student) => {
            console.log(`Teacher ${student}`);
        })

        console.log("List faculty`s groups");
        this.groups.forEach((group) => {
            console.log(`Teacher ${group}`);
        })

        console.log(`Decan of this faculty: ${this.name}`);

    }

    @withStars
    public Fire(_firstName: string, _secondName:string, byYourSelf: boolean): void {

        for(let i = 0; i < this.teachers.length; i++) {
            if (_firstName === this.teachers[i].firstName && _secondName === this.teachers[i].secondName) {
                if (byYourSelf === true) {
                    this.teachers.slice(i ,1);
                    console.log("Fired by yourself");
                }
                else if (this.teachers[i].reprimand.length >= 3) {
                    this.teachers.slice(i ,1);
                    console.log("Fired because of number of reprimand");
                    console.log("He will never find the word as a teacher");
                }
                else {
                    console.log("DON`T PLAY WITH DECAN NERVES")
                    const PartialReprimandByDecan: Partial<Reprimand> = {
                        description: "Play with decan nerves",
                        priority: 5
                    }
                }
            }
        }
    }

    @withStars
    public Expel(_firstName: string, _secondName:string, byYourSelf: boolean) {
        
        for(let i = 0; i < this.students.length; i++) {
            if(_firstName === this.students[i].firstName && _secondName === this.students[i].secondName) {
                if (byYourSelf == true) {
                    console.log("We will remember you for the end of time");
                    this.students.slice(i, 1);
                }
                else if (this.students[i].getAvarangeMark() < 51) {
                    console.log("Get out here dumb student");
                    this.students.slice(i, 1);
                }
                else{
                    console.log("What a mistake, Sorry.")
                }
            }
        }

    }
    

    public updateSalary(teacher: Teacher, recomendation:boolean): number {
        var isSalaryReview;
        for (let i = 0; i < this.teachers.length; i++) {
            if (this.teachers[i] === teacher) {
                if (this.teachers[i].reprimand.length <= 3 && recomendation === true) {
                    isSalaryReview = true;
                }
                if(isSalaryReview === true){
                    this.teachers[i]._salary = this.teachers[i]._salary + 500;
                    return this.teachers[i]._salary+=500;
                }
                else{
                    console.log("We can`t update your salary")
                    return teacher._salary
                }
            }
            
        }
        console.log("It`n not your faculty")
        return teacher._salary;
    }

    public chooseDecan(candidate: Teacher, recomendation: boolean) {
        this.teachers.forEach((teacher) => {
            if (candidate === teacher) {
                if (teacher.tryBecomeDecan(teacher.faculty, recomendation) == true) {

                }
            }
        })
    }
}