import { Suspense } from "react";
import Skeleton from "../components/Skeleton";
import SalaryInsightsAnalyzer from "../components/SalaryInsightsAnalyzer";
import SalaryTrendTable from "../components/SalaryTrendsTable";
import { fetchSalaryData } from "../utils/fetch";
import Link from "next/link";
import SalaryChart from "../components/Chart";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const occupationCode = (await searchParams).query;
  const response = await fetchSalaryData(occupationCode || "TOTAL");

  if (!response.ok) {
    return (
      <main className="container mx-auto p-4">
        Andmete laadimisel tekkis viga, palun proovi mõne aja pärast uuesti või
        mine{" "}
        <Link href="/" className="text-red-600 underline">
          tagasi esilehele
        </Link>
        .
      </main>
    );
  }

  const data = await response.json();

  const years = Object.keys(data.dimension.Vaatlusperiood.category.label);
  const values = data.value;
  const occupationLabel = Object.values(
    data.dimension.Tegevusala.category.label
  )[0] as string;

  return (
    <main className="container mx-auto px-4 py-8 lg:py-12 space-y-4">
      <h1 className="text-4xl lg:text-5xl font-bold py-4">{occupationLabel}</h1>
      <SalaryChart years={years} salaries={values} />
      <div className="overflow-x-auto">
        <SalaryTrendTable years={years} values={values} />
      </div>
      <Suspense fallback={<Skeleton />}>
        <article className="text-neutral-600">
          <h2 className="text-neutral-900 text-lg lg:text-2xl font-bold pb-2">
            Palga analüüs ja prognoos
          </h2>
          <SalaryInsightsAnalyzer
            years={years}
            values={values}
            occupationLabel={occupationLabel}
          />
        </article>
      </Suspense>
    </main>
  );
}
