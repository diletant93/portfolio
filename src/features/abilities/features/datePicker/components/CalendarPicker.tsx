import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { formatDate } from "date-fns";
import { useState } from "react";

export default function CalendarPicker() {
    const [date, setDate] = useState<Date | undefined>(undefined)
    const [isApplied, setIsApplied] = useState<boolean>(false)
    const today = new Date()
    today.setHours(0,0,0,0)

    function handleReset(){
        setDate(undefined)
        setIsApplied(false)
    }
    function handleApply(){
        setIsApplied(true)
    }
    return (
        <div className="flex-1 flex-center flex-col gap-4">
            <Calendar
                mode="single"
                className="border border-secondary w-full flex-center"
                classNames={{
                    nav_button: "h-7 w-7 bg-primary border border-secondary flex-center hover:bg-secondary hover:text-primary text-xl ",
                    cell: 'cursor-pointer',
                    day_selected: 'border border-secondary rounded-none',

                }}
                selected={date}
                onSelect={(newDate) => {
                    setDate(newDate)
                }}
                disabled={isApplied}
                fromDate={today}
            />
            <p className="self-start">{date ? `Selected: ${formatDate(date, 'dd/MM/yy')}` : 'Select date'}</p>
            <div className="flex w-full gap-5">
                <Button className="shadcn-button flex-1" onClick={handleReset} >Reset</Button>
                <Button className="shadcn-button flex-1" onClick={handleApply} disabled={isApplied || !date}>{isApplied ? 'Applied' : 'Apply'}</Button>
            </div>


        </div>
    );
}
