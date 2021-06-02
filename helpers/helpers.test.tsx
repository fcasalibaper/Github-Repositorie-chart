
import "@testing-library/jest-dom/extend-expect";
// import axiosMock from "./__mock__/axios";
import { getData, money } from "./helpers";
import { render } from "@testing-library/react";

describe("helpers", () => {
	
	test("Money", () => {
		const moneyVals = {
			initial : 162750,
			finalResult : "$ 1627,50"
		};
		const result = render(money(moneyVals.initial / 100));
		result.getByText(moneyVals.finalResult);
	});

	test("Money empty", () => {
		const moneyVals = {
			initial : 0,
			finalResult : "$ 0,00"
		};
		const result = render(money(moneyVals.initial / 100));
		result.getByText(moneyVals.finalResult);
	});

	test("Money undefined", () => {
		const moneyVals = {
			initial : undefined,
			finalResult : ""
		};
		const result = render(money(moneyVals.initial / 100));
		result.getByText(moneyVals.finalResult);
	});
});

describe("fetchData", () => {
	const api = "https://morning-cliffs-98727.herokuapp.com/testCall";
	it("fetches successfully data from an API", async () => {
		const apiMockResponse = await getData(api);

		await expect(apiMockResponse).toEqual(["ok"]);
	});
});
