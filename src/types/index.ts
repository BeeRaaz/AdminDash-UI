export interface MonthlyVisitors {
  month: string;
  desktop: number;
  mobile: number;
}

export interface BrowserVisitors {
  browser: "chrome" | "safari" | "firefox" | "edge" | "other";
  visitors: number;
  fill: string;
}