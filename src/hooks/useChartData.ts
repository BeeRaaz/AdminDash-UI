import { useCallback, useEffect, useState } from "react";

import {
  browserVisitorsMock,
  monthlyVisitorsMock,
} from "@/data/mock-data";
import { BrowserVisitors, MonthlyVisitors } from "@/types";

type ChartData = {
  monthlyVisitors: MonthlyVisitors[];
  browserVisitors: BrowserVisitors[];
};

// Simulates a data fetch layer while keeping a typed contract.
const fetchChartData = async (): Promise<ChartData> => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          monthlyVisitors: monthlyVisitorsMock,
          browserVisitors: browserVisitorsMock,
        }),
      400
    );
  });
};

export function useChartData() {
  const [data, setData] = useState<ChartData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchChartData();
      setData(result);
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error("Failed to load chart data")
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return {
    data,
    loading,
    error,
    refresh: load,
  };
}
