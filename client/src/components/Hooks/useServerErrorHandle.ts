import {useCallback, useState} from "react";

export function useServerErrorHandle() {
    let [errors, setError] = useState<any>({});

    const errorSetter = useCallback<any>(function (error: any) {
        setError({...error});
    }, [errors]);

    return [errors, errorSetter];
}
