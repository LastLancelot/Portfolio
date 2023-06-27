import{Faculty} from "../classes/faculty"
import { faculty } from "../init"
import { Rector } from "./teacher";

function initUni(target: any) {
    const originalConstructor = target;

    const newConstructor: any = function (...args: any[]) {
        const university = new originalConstructor(...args);
        university.faculties.push(faculty);
        return university;
    }
}


@initUni
export class University {
    constructor(
        public name: string,
        public age: number,
        public faculties: Faculty[],
        public budget: number,
        public rektor?: Rector
    ) {}

    public getListOfFaculty():void {
        console.log("List of faculties: ")        
        this.faculties.forEach((faculty) => {
            faculty.fullInformation();
        })
    }

    public isBudgetAllRight() {
        let facultiesBudget: number = 0;
        this.faculties.forEach((faculty) => {
            facultiesBudget += faculty.budget;
        })

        if (facultiesBudget > this.budget) {
            let minusBudget = (facultiesBudget - this.budget) / this.faculties.length
            this.faculties.forEach((faculty) => {
                faculty.budget -= minusBudget;
            })
            console.log("Budget of all facultie` was reduced");
        }
        else {
            console.log("Budget of university is all right")
        }
    }

    public addFaculty(faculty: Faculty) {
        console.log("Faculty is added")
        this.faculties.push(faculty);
    }

    public rektorTryToSteal(isThatTrue: boolean) {
        if (isThatTrue === true) {
            this.fireRektor();
        }
        else {
            console.log("It is an error")
        }
    }

    private fireRektor() {
        console.log(` Rector ${this.rektor?.secondName} ${this.rektor?.firstName} is fired`)
        this.rektor = undefined;
    }
}