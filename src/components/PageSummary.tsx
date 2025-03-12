import React from "react";
import Heading from "./Heading";

export default function PageSummary({ children }: { children: React.ReactNode }) {
    return (
        <div className="text-center py-5">
            <Heading className="text-sm">{children}</Heading>
        </div>
    );
}
