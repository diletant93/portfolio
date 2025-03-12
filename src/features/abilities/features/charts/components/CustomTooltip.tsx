import { TooltipProps } from "recharts";
import { ValueType, NameType } from "recharts/types/component/DefaultTooltipContent";
export default function CustomTooltip({ active, payload, label }: TooltipProps<ValueType, NameType>) {
    if (active && payload && payload.length)
        return (
            <div className="custom-tooltip">
                <p className="tooltip-label">{label}</p>
                {payload.map((entry, index) => (
                    <p className="tooltip-item" key={`item-${index}`}>
                        {entry.name}: {entry.value}
                    </p>
                ))}
            </div>
        );
}
