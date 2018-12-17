export class CD {
    description: string[];
    isLend: boolean;

    constructor(public band: string, public name: string, public emprunteur: string = "") {
        this.isLend = false;
    }
}