import { Teacher } from "./teacher"


export type Subject = string;

export class InfoSubject {
    constructor(
    public readonly teacher: Teacher,
    private literature: string[],
    public readonly studingCredit: number,
    public grade?: number
    ) {}
   
    print(): void {
        console.log(this.teacher);
        console.log("List of books")
        this.literature.forEach((book) => {
            console.log(`Book: ${book}`)
        })
        console.log(`Teache of subject ${this.teacher}`)
        console.log(`Number of credit for this subject ${this.studingCredit}`)
        if (typeof this.grade !== undefined) {
            console.log(this.grade)
        }
    }

    getGradeIfExist():number | undefined {
        if(typeof this.grade === "number") {
            return this.grade;
        }
        else {
            return 0;
        }
    }
}