"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export default function AppAreaChart() {
  return (
    <>
      <div className="h-full">
        <h2 className="font-bold tracking-tighter text-lg mb-5">
          Total Visitors - Area Chart
        </h2>
        <ChartContainer config={chartConfig} className="min-h-40 w-full">
          <AreaChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} horizontal={true} />
            <XAxis
              dataKey={"month"}
              tickLine={false}
              tickMargin={5}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis tickLine={false} tickMargin={5} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Area
              dataKey={"desktop"}
              type={"natural"}
              fill="var(--color-desktop)"
              fillOpacity={0.5}
              stroke="var(--color-desktop)"
            />
            <Area
              dataKey={"mobile"}
              type={"natural"}
              fill="var(--color-mobile)"
              fillOpacity={0.5}
              stroke="var(--color-mobile)"
            />
          </AreaChart>
        </ChartContainer>
      </div>
    </>
  );
}
