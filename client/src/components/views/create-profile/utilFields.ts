import {dropdownDataType, InputField} from "../../../interfaces/General";

const status: Array<dropdownDataType> = [
    {placeholder: 'Select Professional Status', value: 0},
    {placeholder: 'Developer', value: 'Developer'},
    {placeholder: 'Junior Developer', value: 'Junior Developer'},
    {placeholder: 'Senior Developer', value: 'Senior Developer'},
    {placeholder: 'Manager', value: 'Manager'},
    {placeholder: 'Student or Learning', value: 'Student or Learning'},
    {placeholder: 'Instructor or Teacher', value: 'Instructor or Teacher'},
    {placeholder: 'Intern', value: 'Intern'},
    {placeholder: 'Other', value: 'Other'}
];

export const InputFields: Array<InputField> = [
    {
        name: 'handle',
        placeholder: 'Profile Handle',
        required: true
    },
    {
        name: 'status',
        type: "select",
        placeholder: 'Status',
        required: true,
        data: status
    },
    {
        name: 'company',
        placeholder: 'company'
    },
    {
        name: 'website',
        placeholder: 'website'
    },
    {
        name: 'location',
        placeholder: 'location'
    },
    {
        name: 'skills',
        placeholder: 'skills',
        required: true
    },
    {
        name: 'githubusername',
        placeholder: 'githubusername'
    },
    {
        name: "bio",
        type: "textArea",
        placeholder: 'bio'
    }
];

export const socialFields: Array<InputField> = [
    {
        placeholder: 'Twitter',
        name: 'twitter',
    },

    {
        placeholder: 'Facebook',
        name: 'facebook',
    },

    {
        placeholder: 'Linkedin',
        name: 'linkedin',
    },

    {
        placeholder: 'YouTube',
        name: 'youtube',
    },

    {
        placeholder: 'Instagram',
        name: 'instagram',
    },
];
