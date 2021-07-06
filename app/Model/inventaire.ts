export class Inventaire{
    
    id_inventaire !: number;
    num_inventaire !: string;

    constructor(id:number, num:string){
        this.id_inventaire=id;
        this.num_inventaire=num;
    }
}