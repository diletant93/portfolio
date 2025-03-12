import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-day-picker";

export default function RangePicker() {
    const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined)
    const [isApplied, setIsApplied] = useState<boolean>(false)

    const formattedDateRange = dateRange?.from && dateRange?.to
        ? `Selected: ${format(dateRange.from, 'dd/MM/yy')} - ${format(dateRange.to, 'dd/MM/yy')}`
        : dateRange?.from
            ? `Selected: ${format(dateRange.from, 'dd/MM/yy')} - ...`
            : 'Select a date range';

    const today = new Date()
    today.setHours(0, 0, 0, 0)

    function handleReset() {
        setDateRange(undefined)
        setIsApplied(false)
    }
    function handleApplied() {
        setIsApplied(true)
    }
    return (
        <div className="flex-1 flex-center flex-col gap-4">
            <Calendar
                mode="range"
                className="border border-secondary w-full flex-center"
                classNames={{
                    nav_button: "h-7 w-7 bg-primary border border-secondary flex-center hover:bg-secondary hover:text-primary text-xl ",
                    cell: 'cursor-pointer',
                    day_selected: 'border border-secondary rounded-none',
                }}
                selected={dateRange}
                onSelect={(dateRange) => setDateRange(dateRange)}
                initialFocus
                fromDate={today}
                disabled={isApplied}
            />
            <p className="self-start">{formattedDateRange}</p>
            <div className="flex w-full gap-5">
                <Button className="shadcn-button flex-1" onClick={handleReset} >Reset</Button>
                <Button className="shadcn-button flex-1" onClick={handleApplied} disabled={isApplied || !dateRange?.from || !dateRange?.to}>{isApplied ? 'Applied' : 'Apply'}</Button>
            </div>
        </div>
    );
}
