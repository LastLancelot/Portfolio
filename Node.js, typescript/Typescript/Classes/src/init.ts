import { Faculty } from "./classes/faculty";
import { Student } from "./classes/student";
import { Degree, Sex } from "./enum/enums";
import { Subject, InfoSubject } from "./classes/subjects";
import { Decan, Teacher } from "./classes/teacher";
import { University } from "./classes/university";
import { Group } from "./classes/group";

const LNU = new University(
  "Lviv national unversity of Ivan Franko",
  400,
  [],
  100000000
)

export const faculty = new Faculty("Faculty of Science", "Building A", "123456789", [], [], [], 1000, LNU);

const groupA = new Group(
  "PMP",
  [],
  [],
  ["Math", "Eng"]
)

const groupB = new Group(
  "PMI",
  [],
  [],
  ["Math", "Fre"]
)

const decan = new Decan(
    "John",
    "Doe",
    35,
    Sex.Male,
    [groupA, groupB],
    faculty,
    "Math"
  );


const teacher = new Teacher(
    "John",
    "Doe",
    35,
    Sex.Male,
    [groupA, groupB],
    Degree.Masters,
    [],
    faculty,
    5000,
    "Eng",    
    true,
    "987654321"
);

const course1 = new InfoSubject(teacher, ["Book 1", "Book 2"], 3);
const course2 = new InfoSubject(teacher, ["Book 3", "Book 4"], 4, 85)
const course3 = new InfoSubject(teacher, ["Book 5", "Book 6"], 8, 51)


const course6 = new InfoSubject(teacher, ["Book 1", "Book 2"], 3, 71);
const course5 = new InfoSubject(teacher, ["Book 3", "Book 4"], 4, 90)
const course4 = new InfoSubject(teacher, ["Book 5", "Book 6"], 8, 61)

const student1 = new Student(
    "John",
    "Doe",
    20,
    Sex.Male,
    "Group A",
    faculty,
    {
        Math: course1,
        English: course2,
        Science: course3,
    },
    "123456789"
  );
  
  const student2 = new Student(
    "Jane",
    "Smith",
    21,
    Sex.Female,
    "Group B",
    faculty,
    {
        Math: course6,
        English: course5,
        Science: course4,
    }
);


const teacher1 = new Teacher(
  "John",
  "Doe",
  35,
  Sex.Male,
  [groupA, groupB],
  Degree.Masters,
  [],
  faculty,
  5000,
  "Fre",
  true,
  "987654321"
);

const teacher2 = new Teacher(
  "Jane",
  "Smith",
  40,
  Sex.Female,
  [groupA, groupB],
  Degree.Professor,
  [],
  faculty,
  6000,
  "Math",
  false,
  "123456789"
);

student1.print();
student2.print();
console.log(student1.getAvarangeMark());
LNU.addFaculty(faculty);
faculty.fullInformation();
faculty.chooseDecan(teacher1, true);
faculty.Fire( "Jane", "Smith", true);
faculty.Expel(  "Jane", "Smith", false);
faculty.updateSalary(teacher1, true);
LNU.getListOfFaculty();
student1.callToFacultyOffice("question");
