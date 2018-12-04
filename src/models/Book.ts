export class Book {
    description: string[];
    isLend: boolean;

    constructor(public author: string, public name: string) {
        this.isLend = false;
    }
}