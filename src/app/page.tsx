import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChart";
import Container from "@/components/Container";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <section className="py-10">
        <Container>
          <ul className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3">
            <li className="lg:col-span-2 xl:col-span-1">
              <Card className="h-full">
                <CardContent>
                  <AppBarChart />
                </CardContent>
              </Card>
            </li>
            <li className="lg:col-span-2 xl:col-span-1">
              <Card className="h-full">
                <CardContent>
                  <AppAreaChart />
                </CardContent>
              </Card>
            </li>
            <li className="md:col-span-2 lg:col-span-4 xl:col-span-1">
              <Card className="h-full">
                <CardContent>
                  <AppPieChart />
                </CardContent>
              </Card>
            </li>
          </ul>
        </Container>
      </section>
    </>
  );
}
