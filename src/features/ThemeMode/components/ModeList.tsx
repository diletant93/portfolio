import { SelectItem } from "@/components/ui/select";
import { THEMES_VALUES } from "../constants/themes";

export default function ModeList() {
    return (
        <>
        {
            THEMES_VALUES.map((theme: string) => {
                return  <SelectItem key={theme} value={theme} className="shadcn-header-selector-item">{theme}</SelectItem>
            })
        }
        </>
    );
}
