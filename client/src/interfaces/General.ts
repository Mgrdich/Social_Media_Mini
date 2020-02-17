export interface InputField {
    name: string;
    type?: "textArea" | "select";
    placeholder: string;
    required?: boolean;
    data?: Array<dropdownDataType>;
    default?:any;
}

export interface dropdownDataType {
    value: number | string;
    placeholder: string;
    id?: string;
}

export interface keyValue {
    [key: string]: string;
}
