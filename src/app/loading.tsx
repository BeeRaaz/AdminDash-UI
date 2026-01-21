import Container from "@/components/Container";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
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
