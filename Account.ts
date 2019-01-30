let incrementalId: number = 0;
export class Account {
    public id: number;
    public iban: string;
    
    constructor(public budget: number, public bankId: number){
        this.id = incrementalId++;
        this.iban = `${bankId}-${this.id}`;
    }
}