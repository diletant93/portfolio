import { ResponsiveContainer, PieChart as PieChartComponent, Pie, Sector, Cell, Legend, Tooltip } from "recharts";
import { planeCrashData } from "../constants/chartsData";
import { COLORS } from "../constants/pieChartColors";
import CustomTooltip from "./CustomTooltip";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { MEDIA_QUERIES } from "@/constants/mediaQueries";

export default function PieChart() {
    const matched = useMediaQuery(MEDIA_QUERIES.MD)
    return (
        <ResponsiveContainer width='100%' height={matched?'70%':'100%'}>
            <PieChartComponent width={400} height={400}>
                <Legend />
                <Tooltip content={<CustomTooltip/>}/>
                <Pie
                    data={planeCrashData}
                    cx='50%'
                    cy='50%'
                    dataKey="planeCrashes"   // 🔴 This should point to your numerical values
                    nameKey="name"
                    outerRadius={80}
                >
                    {planeCrashData.map((item, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChartComponent>
        </ResponsiveContainer>
    );
}
