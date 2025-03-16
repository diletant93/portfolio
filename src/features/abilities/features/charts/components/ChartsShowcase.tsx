import Separator from "@/features/abilities/components/Separator";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { MEDIA_QUERIES } from "@/constants/mediaQueries";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ChartsShowcase() {
  const matched = useMediaQuery(MEDIA_QUERIES.MD)
  if (matched) {
    return (
      <div className="showcase flex md:flex-row h-[50vh] md:h-[30rem] flex-col justify-between">
        <LineChart />
        <Separator />
        <div className="flex-1 flex-center flex-col overflow-y-auto custom-scrollbar  text-center">
          <h1>Plane crashes by seasons</h1>
          <PieChart />
        </div>
      </div>
    );
  }
  if (!matched) {
    return (
      <Tabs defaultValue="line" className="shadcn-tabs">
        <TabsList className="shadcn-tabs-list">
          <TabsTrigger value="line" className="shadcn-tabs-trigger">Line chart</TabsTrigger>
          <TabsTrigger value="pie" className="shadcn-tabs-trigger">Pie chart</TabsTrigger>
        </TabsList>
        <TabsContent value="line" className="w-full">
          <div className="showcase flex md:flex-row h-[50vh] md:h-[30rem] flex-col justify-between">
          <LineChart />
        </div>
        </TabsContent>
        <TabsContent value="pie" className="w-full">
          <div className="showcase flex md:flex-row h-[50vh] md:h-[30rem] flex-col justify-between">
            <div className="flex-1 flex-center flex-col overflow-y-auto custom-scrollbar  text-center">
              <h1>Plane crashes by seasons</h1>
              <PieChart />
            </div>
          </div>
        </TabsContent>
      </Tabs>

    )
  }
}
