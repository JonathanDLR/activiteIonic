export class Book {
    description: string[];
    isLend: boolean;

    constructor(public author: string, public name: string, public emprunteur: string = "") {
        this.isLend = false;
    }
}