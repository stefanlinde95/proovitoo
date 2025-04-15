import { OccupationOption, StatisticsApiResponse } from "./types";
import SearchForm from "./components/SearchForm";
import { STATISTICS_API_URL } from "./config/constants";

export default async function Page() {
  "use cache";

  const response = await fetch(STATISTICS_API_URL);

  if (!response.ok) {
    return (
      <main className="container mx-auto">
        Andmete laadimisel tekkis viga, palun proovi mõne aja pärast uuesti!
      </main>
    );
  }
  const data: StatisticsApiResponse = await response.json();

  const occupations = data.variables.find(
    (variable) => variable.code === "Tegevusala"
  );

  const occupationsOptions: OccupationOption[] = occupations
    ? occupations.values.map((value, index) => ({
        value,
        label: occupations.valueTexts[index],
      }))
    : [];

  return (
    <main className="container mx-auto p-4 space-y-4 overflow-x-hidden">
      <p className="text-neutral-600">
        Veebirakendus, mis võimaldab kasutajatel analüüsida Eesti palgaturu
        andmeid. Vali ametivaldkond, vajuta &quot;Otsi&quot; et saada palkade kokkuvõte.
      </p>
      <SearchForm options={occupationsOptions} />
    </main>
  );
}
