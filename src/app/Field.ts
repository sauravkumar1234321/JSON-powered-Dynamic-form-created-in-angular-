export class Field{
    controlType : string;
    type : string;
    value : string;
    key : string;
    label : string;
    id : number;
    style : object;
    options : any;
    validations : string[];
    isForm = false;
    textAreaValue: string;
    checkboxOptions: any;
    multiselectOptons: any;
    class ='col-xs-6';



    constructor(obj:{
        controlType? : string;
        type? : string;
        value? : string;
        key? : string;
        label? : string;
        id? : number;
        style? : object;
        options? : any;
        validations? : string[];
        textAreaValue? : string;
        checkboxOptions? : any;
        multiselectOptons? : any;
    }){
        this.controlType = obj.controlType;
        this.type = obj.type;
        this.value = obj.value;
        this.key = obj.key;
        this.label = obj.label;
        this.id = obj.id;
        this.style = JSON.parse(JSON.stringify(obj.style));
        this.options = JSON.parse(JSON.stringify(obj.options));
        this.validations = JSON.parse(JSON.stringify(obj.validations));
        this.textAreaValue = obj.textAreaValue;
        this.checkboxOptions = obj.checkboxOptions;
        this.multiselectOptons = obj.multiselectOptons;
    }
}