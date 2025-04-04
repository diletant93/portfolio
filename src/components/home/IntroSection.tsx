import { Link } from "react-router-dom";
import ScrollingListLeft from "../ScrollingListLeft";
import ScrollingListRight from "../ScrollingListRight";
import { Button } from "../ui/button";
import { kanjiArray } from "@/constants/scrollContent";

export default function IntroSection() {
    const renderNumber = (item: string) => <span className="text-xl hover:border inline-block h-8 flex-center">{item}</span>
    return (
        <div className="intro-section">
            <div className="intro-item">
                <div className="text-center text-lg md:text-xl uppercase transition-all duration-300 origin-center hover:tracking-widest">
                    You can check my journey
                </div>
                <Link to={'/bio'}>
                    <Button className="shadcn-button text-2xl uppercase hover:-translate-y-2 shadow-sm hover:shadow-2xl w-60 h-20 active:shadow-xl active:translate-y-[1px]">BIO</Button>
                </Link>
            </div>
            <ScrollingListRight items={kanjiArray} renderItem={renderNumber} />
            <div className="intro-item ">
                <div className="text-center text-lg md:text-xl uppercase transition-all duration-300 origin-center hover:tracking-widest">
                    Here's a glimpse of what I can do
                </div>
                <Link to={'/abilities'}>
                    <Button className="shadcn-button text-2xl uppercase hover:-translate-y-2 shadow-sm hover:shadow-2xl w-60 h-20 active:shadow-xl active:translate-y-[1px]">Abilities</Button>
                </Link>
            </div>
            <ScrollingListLeft items={kanjiArray} renderItem={renderNumber} />
            <div className="intro-item ">
                <div className="text-center text-lg md:text-xl uppercase transition-all duration-300 origin-center hover:tracking-widest">
                    What I aim to learn next
                </div>
                <Link to={'/prospects'}>
                    <Button className="shadcn-button text-2xl uppercase hover:-translate-y-2 shadow-sm hover:shadow-2xl w-60 h-20 active:shadow-xl active:translate-y-[1px]">Prospects</Button>
                </Link>
            </div>
            <ScrollingListRight items={kanjiArray} renderItem={renderNumber} />
        </div>
    );
}
