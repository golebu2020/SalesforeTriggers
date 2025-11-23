import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    carList = ["Ford", "Audi", "Maruti", "Hyundai", "Mercedes", "Bentley"];

    ceoList = [
        {
            id: 1,
            company: "Google",
            name: "Sunder Pichai"
        },
        {
            id: 2,
            company: "Meta",
            name: "Mark Zuckerberg"
        },
        {
            id: 3,
            company: "Apple Inc.",
            name: "Tim Cook"
        },
        {
            id: 4,
            company: "Amazon",
            name: "Jeff Bezos"
        },
        {
            id: 5,
            company: "Microsoft",
            name: "Satya Nadella"
        },
        {
            id: 6,
            company: "Tesla",
            name: "Elon Musk"
        }
    ]


}