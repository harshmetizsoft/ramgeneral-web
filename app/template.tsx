
import React from "react";
import Preloader from "~/sections/shared/Preloader";

export default function Template({ children }: { children: React.ReactNode }) {

    return (
        <>
            <Preloader />
            {children}
        </>
    );
}


