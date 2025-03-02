import BioHeading from "./BioHeading";
type EducationItem = {
    facilityName: string,
    achievement: string,
    duration: string
}
const educationList: EducationItem[] = [
    {
        facilityName: 'Middle School Ukraine ',
        achievement: 'Gold medal',
        duration: '2009-2021'
    },
    {
        facilityName: 'Lvil politechnich university',
        achievement: 'Student of the CS faculty',
        duration: '2021-2022'
    },
]

function EducationElement({ educationItem }: { educationItem: EducationItem }) {
    return <li>
        <h4>{educationItem.facilityName}</h4>
        <p>{educationItem.achievement}</p>
        <p className="text-sm">{educationItem.duration}</p>
    </li>
}
function EducationList() {
    return <ul className="space-y-5">
        {educationList.map(educationItem => <EducationElement key={educationItem.facilityName} educationItem={educationItem} />)}
    </ul>
}
export default function Education() {

    return (
        <div>
            <BioHeading>Education</BioHeading>
            <EducationList/>
        </div>
    );
}
