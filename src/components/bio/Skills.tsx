import BioHeading from "./BioHeading";
type SkillItem = {
    name:string
}
const skillsList:SkillItem[] = [
    {
        name:'C#'
    },
    {
        name:'JS'
    },
    {
        name:'TS'
    }
]
function SkillElement({skill}:{skill:SkillItem}){
    return <li className="inline-block p-5 bg-secondary text-primary rounded-sm">
        {skill.name}
    </li>
}
function SkillsList(){
    return <ul className="flex flex-col gap-3">
        {skillsList.map(element => <SkillElement key={element.name} skill={element}/>)}
    </ul>
}
export default function Skills() {
  return (
    <div>
       <BioHeading>Technical skills</BioHeading>
       <SkillsList/>
    </div>
  );
}
