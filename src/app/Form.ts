export class Form{
    label : string;
    style : object;
    id : number;
    fields : any[];
    isForm = true;
    key: string;
    class: 'container';
    isFlex: any;

    constructor(obj: { label? : string;style? : object;id? : number;fields? : any[]; key? : string; isFlex: any;} )
    {
        this.label = obj.label;
        this.style = JSON.parse(JSON.stringify(obj.style));
        this.id = obj.id;
        this.fields = JSON.parse(JSON.stringify(obj.fields));
        this.key = obj.key;
        this.isFlex = obj.isFlex;
    }
}