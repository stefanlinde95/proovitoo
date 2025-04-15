function generatePrompt({
  years,
  values,
  occupationLabel,
}: {
  years: string[];
  values: number[];
  occupationLabel: string;
}) {
  const isTotal = occupationLabel === "Kokku – kõik tegevusalad";
  const formattedValues = years
    .map((year, index) => `${year}. aastal: ${values[index]} eurot`)
    .join(", ");

  return `Oled andmeanalüütik ja karjäärinõustaja. Analüüsi Eesti
    ${
      isTotal ? "üldisi" : `"${occupationLabel}" valdkonna`
    }  palgaandmeid aastatel ${years.join(", ")}.
    Andmed: [aasta - keskmine brutokuupalk eurodes]: ${formattedValues}

    Palun vasta:
    1. Kas palk on tõusnud, langenud või püsinud stabiilsena? Lühike selgitus.
    2. Prognoos palgale järgmise 2-3 aasta jooksul ja miks.
    3. Praktilised soovitused palgatõusuks selles valdkonnas (oskused, sertifikaadid, valdkonnad).

    Hoia vastus selge, arusaadav ja kasuta kuni 100 sõna. Kirjuta ametlikus, kolmandas isikus,
    ilma esimeses isikus väljenditeta. Sobita toon selliseks, nagu see oleks osa usaldusväärsest
    infolehest või avalikust majandusuudisest.`;
}

export default generatePrompt;