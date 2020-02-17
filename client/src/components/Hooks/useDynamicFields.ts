import {InputField} from "../../interfaces/General";
import {useEffect} from "react";

//registering Custom Register for the Controlled Components
export function useDynamicFields(arrayFields: Array<InputField>, register: Function, unregister: Function) {
    useEffect(function () { //TODO covert it to a custom hook
        console.log("hookcount");
        for (let i = 0; i < arrayFields.length; i++) {
            if (arrayFields[i].type === 'select') {
                register(arrayFields[i].name, {required: "This Field is Required"});
            }
        }
        return () => { //cleanup //TODO check out if it is the best way
            for (let i = 0; i < arrayFields.length; i++) {
                if (arrayFields[i].type === 'select') {
                    unregister(arrayFields[i].name);
                }
            }
        };
    }, [register, arrayFields,unregister])
}