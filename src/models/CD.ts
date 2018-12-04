export class CD {
    description: string[];
    isLend: boolean;

    constructor(public band: string, public name: string) {
        this.isLend = false;
    }
}