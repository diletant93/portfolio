import CalendarPicker from "./CalendarPicker";
import RangePicker from "./RangePicker";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DatePickerShowcase() {
  return (
    <div className="showcase flex md:flex-row min-h-[30rem] flex-col justify-between">
      <Tabs defaultValue="day" className="shadcn-tabs">
        <TabsList>
          <TabsTrigger value="day" className="shadcn-tabs-trigger">Day picker</TabsTrigger>
          <TabsTrigger value="range" className="shadcn-tabs-trigger">Range picker</TabsTrigger>
        </TabsList>
        <TabsContent value="day" className="w-full">
          <CalendarPicker />
        </TabsContent>
        <TabsContent value="range" className="w-full">
          <div className="flex-1 flex-center overflow-y-auto custom-scrollbar ">
            <RangePicker />
          </div>
        </TabsContent>
      </Tabs>

    </div>
  );
}
