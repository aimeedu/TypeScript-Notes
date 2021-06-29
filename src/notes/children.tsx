import React, { ReactElement, ReactNode } from "React";

function Heading({children} : {children: ReactNode}): ReactElement | null {
    return <h1>{children}</h1>
}