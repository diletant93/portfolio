import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useDispatch } from 'react-redux';
import { AppDispatch } from "@/store/store";
import { setTheme } from "../themeModeSlice/slice";
import { THEMES_VALUES } from "../constants/themes";
import Button from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function ToggleMode() {
    const { setItem } = useLocalStorage<string>('theme')
    const dispatch = useDispatch<AppDispatch>()

    function handleTheme(theme: string) {
        setItem(theme)
        dispatch(setTheme(theme))
    }
    return (

        <Select>
            <SelectTrigger className="flex gap-2 h-full rounded-none border-none text-md font-bold uppercase">
                <SelectValue placeholder="Theme" className="font-grotesk" />
            </SelectTrigger>
            <SelectContent className="test px-2 py-2 z-15">
                {THEMES_VALUES.map((theme: string) => {
                    return <SelectItem value="system" className="cursor-pointer font-bold uppercase bg-primary hover:text-primary hover:bg-secondary">{theme}</SelectItem>
                })}
            </SelectContent>
        </Select>
    );
}
