"use client";

import { useMemo, useState } from "react";

import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChart";
import Container from "@/components/Container";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { RotateCcw, TriangleAlert } from "lucide-react";
import { useChartData } from "@/hooks/useChartData";
import { browserVisitorsMock, monthlyVisitorsMock } from "@/data/mock-data";

export default function Home() {
  const [range, setRange] = useState<"3m" | "6m" | "all">("all");
  const [browserFilter, setBrowserFilter] = useState<
    "all" | "chrome" | "safari" | "firefox" | "edge" | "other"
  >("all");

  const { data, loading, error, refresh } = useChartData();

  const monthlyVisitors = data?.monthlyVisitors ?? monthlyVisitorsMock;
  const browserVisitors = data?.browserVisitors ?? browserVisitorsMock;

  const filteredMonthly = useMemo(() => {
    if (range === "all") return monthlyVisitors;
    if (range === "3m") return monthlyVisitors.slice(-3);
    return monthlyVisitors.slice(-6);
  }, [monthlyVisitors, range]);

  const filteredBrowsers = useMemo(() => {
    if (browserFilter === "all") return browserVisitors;
    return browserVisitors.filter((b) => b.browser === browserFilter);
  }, [browserFilter, browserVisitors]);

  if (error) {
    return (
      <section className="py-10">
        <Container className="max-w-3xl text-center space-y-4">
          <div className="flex justify-center">
            <TriangleAlert className="text-destructive" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">
            We hit a snag loading your charts
          </h1>
          <p className="text-muted-foreground">
            Please retry. If the issue persists, verify your connection or try
            again later.
          </p>
          <div className="flex justify-center">
            <Button onClick={refresh} variant="default" className="gap-2">
              <RotateCcw size={16} />
              Retry
            </Button>
          </div>
        </Container>
      </section>
    );
  }

  if (loading) {
    return (
      <section className="py-10">
        <Container>
          <ul className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3">
            <ChartCardSkeleton />
            <ChartCardSkeleton />
            <ChartCardSkeleton />
          </ul>
        </Container>
      </section>
    );
  }

  return (
    <>
      <section className="py-10">
        <Container>
          <div className="flex flex-wrap gap-3 items-center justify-between mb-5">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm text-muted-foreground">Range</span>
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { label: "Last 3 months", value: "3m" },
                  { label: "Last 6 months", value: "6m" },
                  { label: "All", value: "all" },
                ].map((option) => (
                  <Button
                    key={option.value}
                    size="sm"
                    variant={range === option.value ? "default" : "outline"}
                    onClick={() =>
                      setRange(option.value as typeof range)
                    }
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm text-muted-foreground">Browser</span>
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { label: "All", value: "all" },
                  { label: "Chrome", value: "chrome" },
                  { label: "Safari", value: "safari" },
                  { label: "Firefox", value: "firefox" },
                  { label: "Edge", value: "edge" },
                  { label: "Other", value: "other" },
                ].map((option) => (
                  <Button
                    key={option.value}
                    size="sm"
                    variant={
                      browserFilter === option.value ? "default" : "outline"
                    }
                    onClick={() =>
                      setBrowserFilter(option.value as typeof browserFilter)
                    }
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <ul className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3">
            <li className="lg:col-span-2 xl:col-span-1">
              <Card className="h-full">
                <CardContent>
                  <AppBarChart data={filteredMonthly} />
                </CardContent>
              </Card>
            </li>
            <li className="lg:col-span-2 xl:col-span-1">
              <Card className="h-full">
                <CardContent>
                  <AppAreaChart data={filteredMonthly} />
                </CardContent>
              </Card>
            </li>
            <li className="md:col-span-2 lg:col-span-4 xl:col-span-1">
              <Card className="h-full">
                <CardContent>
                  <AppPieChart data={filteredBrowsers} />
                </CardContent>
              </Card>
            </li>
          </ul>
        </Container>
      </section>
    </>
  );
}

function ChartCardSkeleton() {
  return (
    <li className="lg:col-span-2 xl:col-span-1">
      <Card className="h-full">
        <CardContent className="space-y-4 py-4">
          <Skeleton className="h-5 w-2/3" />
          <Skeleton className="h-40 w-full" />
        </CardContent>
      </Card>
    </li>
  );
}
