import Separator from "@/features/abilities/components/Separator";
import CalendarPicker from "./CalendarPicker";
import RangePicker from "./RangePicker";

export default function DatePickerShowcase() {
  return (
     <div className="showcase flex md:flex-row h-[80vh] md:h-[30rem] flex-col justify-between">
                <CalendarPicker/>
                <Separator />
                <div className="flex-1 flex-center overflow-y-auto custom-scrollbar ">
                    <RangePicker/>
                </div>
    </div>
  );
}
