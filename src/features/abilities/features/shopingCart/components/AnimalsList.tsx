import AnimalsListItem from "./AnimalsListItem";

export default function AnimalsList() {
    return (
        <div className="flex-1 overflow-y-auto custom-scrollbar [direction:rtl] ">
            <div className="[direction:ltr] pl-3 ">
                {Array.from({ length: 10 }).map((elem, index) => <AnimalsListItem />)}
            </div>
        </div>
    );
}
