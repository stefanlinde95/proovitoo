import { STATISTICS_API_URL, STATISTICS_API_YEARS } from "@/app/config/constants";

export const fetchSalaryData = (occupationCode: string) => {
  return fetch(STATISTICS_API_URL, {
    method: "POST",
    body: JSON.stringify({
      query: [
        {
          code: "Näitaja",
          selection: {
            filter: "item",
            values: ["GR_W_AVG"],
          },
        },
        {
          code: "Tegevusala",
          selection: {
            filter: "item",
            values: [occupationCode || "TOTAL"],
          },
        },
        {
          code: "Vaatlusperiood",
          selection: {
            filter: "item",
            values: STATISTICS_API_YEARS,
          },
        },
      ],
      response: {
        format: "json-stat2",
      },
    }),
  });
};
