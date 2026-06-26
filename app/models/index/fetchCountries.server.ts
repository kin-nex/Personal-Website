import countries from "world-countries";

const VISITED_COUNTRIES = [
	"Albania",
	"Australia",
	"Cyprus",
	"France",
	"Germany",
	"Greece",
	"Hungary",
	"India",
	"Indonesia",
	"Italy",
	"Japan",
	"Laos",
	"Malaysia",
	"Mexico",
	"Monaco",
	"Morocco",
	"Netherlands",
	"Philippines",
	"Portugal",
	"Saint Lucia",
	"Singapore",
	"South Korea",
	"Spain",
	"Sweden",
	"Switzerland",
	"Taiwan",
	"Thailand",
	"Turkey",
	"United Arab Emirates",
	"United Kingdom",
	"United States",
	"Vatican City",
	"Vietnam",
];

export type CountryData = Record<string, { flag: string; visited: boolean }>;

export const fetchCountries = async (): Promise<CountryData | undefined> => {
	try {
		return countries.reduce<CountryData>(
			(acc, { name: { common }, cca2 }) => ({
				...acc,
				[common]: {
					flag: `https://flagcdn.com/${cca2.toLowerCase()}.svg`,
					visited: VISITED_COUNTRIES.includes(common),
				},
			}),
			{},
		);
	} catch (e) {
		console.error(e);
		return undefined;
	}
};
