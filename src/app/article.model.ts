export class Article{
    idArticle!:number;
    num_inventaire!:number;
    designation!:string;
    nature!:string;
    id_fournisseur:any="";
    reference!:string;
    id_type:any="";
    id_facture:any="";
    date_aquisition!:Date;
    date_mise_service!:Date;
    valeur_acquisition!:number;
    id_affectation:any="";
}