import inlineTransform from './inline';


describe('the inline transforms', () => {

	it('should process html files', async () => {
		const content = `
			<html>
				<body>
					Hello Tests
					<script src="./__fixtures__/critical.js" inline></script>
				</body>
			</html>
		`;
		const expected = `
			<html>
				<body>
					Hello Tests
					<script>const msg="hello world";window.alert(msg);</script>
				</body>
			</html>
		`;

		const processed = await inlineTransform({ rootpath: __dirname })(content, 'example.html');
		expect(processed).toBe(expected);
	});

	it('should skip non-html files', async () => {
		const content = `
			<html>
				<body>
					Hello Tests
					<script src="./__fixtures__/critical.js" inline></script>
				</body>
			</html>
		`;

		const processed = await inlineTransform({ rootpath: __dirname })(content, 'example.svg');
		expect(processed).toBe(content);
	});

});
