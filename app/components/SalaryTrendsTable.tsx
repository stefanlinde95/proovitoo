interface SalaryTrendTableProps {
  years: string[];
  values: number[];
}

const SalaryTrendTable = ({ years, values }: SalaryTrendTableProps) => {
  return (
    <>
      <table className="min-w-full border-collapse border border-gray-200">
        <tbody>
          <tr>
            <th className="bg-gray-100 font-semibold border border-gray-200 px-4 py-2 text-left">
              Aasta
            </th>
            {years.map((year) => (
              <td
                key={year}
                className="border border-gray-200 px-4 py-2 text-center font-medium"
              >
                {year}
              </td>
            ))}
          </tr>
          <tr>
            <th className="bg-gray-100 font-semibold border border-gray-200 px-4 py-2 text-left">
              Keskmine brutokuupalk
            </th>
            {values.map((value, index) => (
              <td
                key={index}
                className="border border-gray-200 px-4 py-2 text-center text-nowrap"
              >
                {`${value} €`}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <div className="w-full flex mt-2 justify-end">
        <small className="text-neutral-600">Allikas: Statistikaamet</small>
      </div>
    </>
  );
};

export default SalaryTrendTable;
