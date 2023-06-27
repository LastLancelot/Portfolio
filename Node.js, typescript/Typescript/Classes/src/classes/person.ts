import {Sex} from "../enum/enums"

export abstract class Person {
    constructor(
    firstName: string,
    secondName: string,
    age: number,
    sex: Sex
    ) {}
}