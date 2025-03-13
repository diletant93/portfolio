import React from "react";
import Heading from "./Heading";

export default function PageSummary({ children }: { children: React.ReactNode }) {
    return (
        <div className="text-center py-10">
            <Heading className="h2">{children}</Heading>
        </div>
    );
}
