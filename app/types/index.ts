export interface StatisticsApiVariable {
  code: string;
  text: string;
  values: string[];
  valueTexts: string[];
  elimination?: boolean;
  time?: boolean;
}

export interface StatisticsApiResponse {
  title: string;
  variables: StatisticsApiVariable[];
}

export interface OccupationOption {
  value: string;
  label: string;
}
