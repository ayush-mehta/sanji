module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: "tsconfig.json",
		tsconfigRootDir: __dirname,
		sourceType: "module",
	},
	plugins: ["@typescript-eslint/eslint-plugin"],
	extends: ["plugin:@typescript-eslint/recommended", "plugin:prettier/recommended", "next/core-web-vitals"],
	root: true,
	env: {
		node: true,
		jest: true,
	},
	ignorePatterns: [".eslintrc.js"],
	rules: {
		"@typescript-eslint/naming-convention": [
			"error",
			{
				selector: "interface",
				format: ["PascalCase"],
			},
		],
		"@typescript-eslint/ban-ts-comment": "error",
		"@typescript-eslint/explicit-function-return-type": "error",
		"@typescript-eslint/explicit-module-boundary-types": "error",
		"@typescript-eslint/no-explicit-any": "error",
		"@typescript-eslint/no-unused-vars": "error",
		"@typescript-eslint/no-var-requires": "error",
		"@typescript-eslint/no-empty-function": "warn",
		"@typescript-eslint/no-empty-interface": "warn",
		"@typescript-eslint/no-floating-promises": "warn",
	},
};
