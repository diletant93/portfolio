import { EducationItem, educationList } from "@/constants/educationItems";
import BioHeading from "./BioHeading";

function EducationElement({ educationItem }: { educationItem: EducationItem }) {
    return (
        <li className="p-4 border border-secondary rounded shadow-sm hover:scale-105 hover:shadow-md transition-all duration-300 bg-primary text-secondary cursor-pointer">
            <h4 className="text-lg font-semibold">{educationItem.facilityName}</h4>
            <p className="mt-1">{educationItem.achievement}</p>
            <p className="mt-1 text-sm">{educationItem.duration}</p>
        </li>
    );
}

function EducationList() {
    return (
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full ">
            {educationList.map((educationItem) => (
                <EducationElement
                    key={educationItem.facilityName}
                    educationItem={educationItem}
                />
            ))}
        </ul>
    );
}
export default function Education() {
    
    return (
        <div className="max-w-3xl mx-auto p-6 flex flex-col items-center gap-2 w-full">
            <BioHeading>Education</BioHeading>
            <EducationList />
        </div>
    );
}
