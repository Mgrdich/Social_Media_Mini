import React from "react";

export function withClass<P extends object>(className: string) { //with empty Array only Authntication check
    return function (WrappedComponent: React.ComponentType<P>): React.FC<P> {
        return function (props: P) {
            return (
                <div className={className}>
                    <WrappedComponent {...props as P}/>
                </div>
            )
        }
    }
}