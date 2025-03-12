import Separator from "@/features/abilities/components/Separator";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

export default function ChartsShowcase() {
  return (
    <div className="showcase flex md:flex-row h-[40vh] md:h-[30rem] flex-col justify-between">
                    <LineChart/>
                    <Separator />
                    <div className="flex-1 flex-center flex-col overflow-y-auto custom-scrollbar  text-center">
                      <h1>Plane crashes by seasons</h1>
                        <PieChart/>
                    </div>
        </div>
  );
}
