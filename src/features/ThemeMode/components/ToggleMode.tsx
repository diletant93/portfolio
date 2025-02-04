import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useDispatch } from 'react-redux';
import { AppDispatch } from "@/store/store";
import { setTheme } from "../themeModeSlice/slice";
import { THEMES_VALUES } from "../constants/themes";
import Button from "@/components/ui/Button";

export default function ToggleMode() {
    const { setItem } = useLocalStorage<string>('theme')
    const dispatch = useDispatch<AppDispatch>()

    function handleTheme(theme: string) {
        setItem(theme)
        dispatch(setTheme(theme))
    }
    return (
        <div>
            {THEMES_VALUES.map((theme: string) => {
                return <Button key={theme} className="capitalize" onClick={() => handleTheme(theme)}>
                    {theme}
                </Button>
            })}
        </div>
    );
}
