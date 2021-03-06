import htmlminTransform from './htmlmin';


describe('the htmlmin transforms', () => {

	it('should process html files', async () => {
		const content = `
			<html>
				<head>
					<title>Tests</title>
					<!-- head here -->
				</head>
				<body>
					Hello Tests
					<!-- body there -->
				</body>
			</html>
		`;

		const minified = await htmlminTransform({
			collapseWhitespace: true,
			removeComments: true,
		})(content, 'example.html');
		const expected = '<html><head><title>Tests</title></head><body>Hello Tests</body></html>';
		expect(minified).toBe(expected);
	});

	it('should skip non-html files', async () => {
		const content = `
			<html>
				<head>
					<title>Tests</title>
					<!-- head here -->
				</head>
				<body>
					Hello Tests
					<!-- body there -->
				</body>
			</html>
		`;

		const minified = await htmlminTransform({
			collapseWhitespace: true,
			removeComments: true,
		})(content, 'example.svg');
		expect(minified).toBe(content);
	});

});
