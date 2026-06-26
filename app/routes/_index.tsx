import { MetaFunction } from "react-router";
import { useLoaderData } from "react-router";
import { LifeInsightsCar } from "~/components/index/LifeInsightsCar";
import { LifeInsightsFood } from "~/components/index/LifeInsightsFood";
import { LifeInsightsTravel } from "~/components/index/LifeInsightsTravel";
import { LifeQuote } from "~/components/index/LifeQuote";
import { MainContent } from "~/components/index/MainContent";
import { Socials } from "~/components/index/Socials";
import { fetchCountries } from "~/models/index/fetchCountries.server";

export const loader = async () => {
	const countries = await fetchCountries();
	return { countries };
};

export const meta: MetaFunction = () => {
	return [
		{ title: "It's Kin, you found me 🔥" },
		{
			name: "description",
			content:
				"Hey, I'm Kin! A front-end developer putting pretty boxes on websites.",
		},
	];
};

const Index = () => {
	const { countries } = useLoaderData<typeof loader>();

	return (
		<div className="space-y-20 py-20">
			<MainContent />
			<Socials />
			<LifeQuote />
			<LifeInsightsTravel countries={countries} />
			<LifeInsightsFood />
			<LifeInsightsCar />
		</div>
	);
};

export default Index;
