import { HotTable } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import { HyperFormula } from "hyperformula";
import { registerLanguageDictionary, faIR } from 'handsontable/i18n';

import "handsontable/styles/handsontable.min.css";
import "handsontable/styles/ht-theme-main.min.css";

import { useState } from "react";

import { AmountConfig, DepartmentConfig } from "./columns";

registerAllModules();
registerLanguageDictionary(faIR);

const STATISTICS = [
	["Sum", "Average", "Max"],
	[
		"=SUM(ledger!C:ledger!C)",
		"=AVERAGE(ledger!C:ledger!C)",
		"=MAX(ledger!C:ledger!C)"
	]
];

export default function App() {
	const hyperformulaInstance = HyperFormula.buildEmpty({
		licenseKey: "internal-use-in-handsontable"
	});

	const [data, setData] = useState([
		["Setting up the ledger", "Engineering", 400]
	]);
	return (
		<div style={{ padding: "1rem 2rem" }}>
			<h1>Ledger with Handsontable</h1>
			<hr />
			<div
				style={{
					backgroundColor: "darkgray",
					padding: 20,
					fontSize: 20
				}}
			>
				<HotTable
					// className="htCenter htMiddle"
					data={data}
					language={faIR.languageCode}
					rowHeaders={true}
					colHeaders={["Note", "Department", "Amount"]}
					height="auto"
					licenseKey="non-commercial-and-evaluation"
					columns={[
						{
							type: "text"
						},
						DepartmentConfig,
						AmountConfig
					]}
					colWidths={150}
					formulas={{
						engine: hyperformulaInstance,
						sheetName: "ledger"
					}}
				/>
				<button
					style={{
						marginTop: 10,
						fontSize: 16,
						outline: 0,
						padding: "3px 20px"
					}}
					onClick={() => setData((currData) => [...currData, ["", "", ""]])}
				>
					Add row
				</button>
			</div>
			<h2>Statistics</h2>
			<HotTable
				className="htCenter htMiddle"
				data={STATISTICS}
				language={faIR.languageCode}
				height="auto"
				formulas={{
					engine: hyperformulaInstance,
					sheetName: "statistics"
				}}
				columns={[AmountConfig, AmountConfig, AmountConfig]}
				licenseKey="non-commercial-and-evaluation"
				fillHandle="false"
			/>
		</div>
	);
}
