interface Country {
  name: string;
  code: string;
}

export const useGetCountries = (): Country[] => {
  const countries: Country[] = [
    { name: "afghanistan", code: "+93" },
    { name: "australia", code: "+61" },
    { name: "brazil", code: "+55" },
    { name: "canada", code: "+1" },
    { name: "china", code: "+86" },
    { name: "france", code: "+33" },
    { name: "germany", code: "+49" },
    { name: "india", code: "+91" },
    { name: "iran", code: "+98" },
    { name: "italy", code: "+39" },
    { name: "japan", code: "+81" },
    { name: "mexico", code: "+52" },
    { name: "russia", code: "+7" },
    { name: "saudiArabia", code: "+966" },
    { name: "southAfrica", code: "+27" },
    { name: "southKorea", code: "+82" },
    { name: "spain", code: "+34" },
    { name: "turkey", code: "+90" },
    { name: "unitedArabEmirates", code: "+971" },
    { name: "unitedKingdom", code: "+44" },
    { name: "unitedStates", code: "+1" },
  ];

  return countries;
};
