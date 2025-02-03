import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Button } from "./ui/button";

export default function ToggleMode() {
    const { setItem } = useLocalStorage<string>('theme')
    return (
        <div>
            <Button onClick={() => { setItem('light') }}>Light</Button>
            <Button onClick={() => { setItem('dark') }}>Dark</Button>
        </div>
    );
}
