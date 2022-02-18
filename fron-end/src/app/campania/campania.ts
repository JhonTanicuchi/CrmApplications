export class Campania{
    constructor(
        public campaniaId:number,
        public nombre:string,
        public fechaInicio:Date,
        public fechaFinalizacion:Date,
        public descripcion:string,
        public estado:boolean        
    ) 
    {
        
    }
}