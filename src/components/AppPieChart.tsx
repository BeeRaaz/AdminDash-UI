"use client";

import { Label, Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";
import { useMemo } from "react";
import { browserVisitorsMock } from "@/data/mock-data";
import { BrowserVisitors } from "@/types";

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

type AppPieChartProps = {
  data?: BrowserVisitors[];
};

export default function AppPieChart({ data }: AppPieChartProps) {
  const chartData = data ?? browserVisitorsMock;

  const totalVisitors = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, [chartData]);

  return (
    <>
      <div className="h-full">
        <h2 className="font-bold tracking-tighter text-lg mb-5">
          Total Visitors - Pie Chart
        </h2>
        <ChartContainer config={chartConfig} className="w-full md:h-52 lg:h-66">
          <PieChart data={chartData}>
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Pie
              data={chartData}
              dataKey={"visitors"}
              nameKey={"browser"}
              innerRadius={50}
              strokeWidth={10}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </div>
    </>
  );
}
