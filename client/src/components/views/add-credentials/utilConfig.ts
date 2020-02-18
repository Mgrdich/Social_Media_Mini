import {InputField} from "../../../interfaces/General";

export const experienceInputFields: Array<InputField> = [
    {
        placeholder: "* Company",
        name: "company",
        required: true
    },
    {
        placeholder: "* Job Title",
        name: "title",
        required:true
    },
    {
        placeholder: "Location",
        name: "location",
    },
    {
        placeholder: "Job Description",
        name: "description",
    },
];

export const educationInputFields: Array<InputField> = [
    {
        placeholder: "* School",
        name: "school",
        required: true
    },
    {
        placeholder: "* Degree or Certification",
        name: "degree",
        required: true
    },
    {
        placeholder: "* Field of Study",
        name: "fieldOfStudy",
        required: true
    },
    {
        placeholder: "Program Description",
        name: "description",
    },
];