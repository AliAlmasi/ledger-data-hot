const DEPARTMENTS = [
	"Sales",
	"Engineering",
	"Product",
	"Marketing",
	"Accounts"
];

const DepartmentConfig = {
	editor: "select",
	selectOptions: DEPARTMENTS
};

const AmountConfig = {
	type: "numeric",
	numericFormat: {
		pattern: "$0,0.00",
		culture: "en-US"
	}
};

export { DepartmentConfig, AmountConfig };
