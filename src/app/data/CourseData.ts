import { Course } from "../model/course";
import { Student } from "../model/student";

export const courseData: Course = {
    id: 1,
    name: "Matematica",
    student: [
        {
            id: 1,
            identification: 11,
            name: "Pedro",
            sumame: "Romero",
        },
        {
            id: 2,
            identification: 22,
            name: "Alex",
            sumame: "Petro",
        },
        {
            id: 3,
            identification: 33,
            name: "Roberto",
            sumame: "Cedeno",
        },
        {
            id: 4,
            identification: 44,
            name: "Luis",
            sumame: "Maderop",
        },
    ],
}