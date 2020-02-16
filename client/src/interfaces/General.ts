export interface InputField {
    name: string;
    type?: "textArea" | "select";
    placeholder: string;
    required?: boolean;
}

export interface dropdownDataType {
    value: number | string;
    placeholder: string;
    id?: string;
}
