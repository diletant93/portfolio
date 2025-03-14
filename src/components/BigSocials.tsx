

import ScrollingListRight from "./ScrollingListRight";
import Socials from "./Socials";

export default function BigSocials() {
    const numbers = Array.from({ length:100},).map((_, index: number) => Math.ceil(Math.random() * 90) + 10)
    const renderNumber = (item:number) => <>{item}</>
    return (
      <div className="flex justify-center gap-3 py-20 items-center">
        <p className="uppercase text-xl">Here are my socials:</p> <Socials/>
      </div>
    );
}
