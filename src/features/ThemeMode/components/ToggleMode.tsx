import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useDispatch, useSelector } from 'react-redux';
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
import { selectTheme } from "..";
import ModeList from "./ModeList";

export default function ToggleMode() {
    const { setItem } = useLocalStorage<string>('theme')
    const theme = useSelector(selectTheme)
    const dispatch = useDispatch<AppDispatch>()

    function handleTheme(theme: string) {
        setItem(theme)
        dispatch(setTheme(theme))
    }
    
    return (

        <Select value={theme} onValueChange={handleTheme}>
            <SelectTrigger className="shadcn-header-selector-trigger">
                <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent className="shadcn-header-selector-content">
                <ModeList />
            </SelectContent>
        </Select>
    );
}
