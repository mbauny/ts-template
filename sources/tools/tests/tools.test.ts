import { isDefined } from '../tools'

describe(`tools`, () =>
{
	describe(`isDefined`, () =>
	{
		test('undefined', () =>
		{
			const generated = isDefined(undefined)
			const expected = false
			expect(generated).toEqual(expected)
		})

		test('empty string', () =>
		{
			const generated = isDefined('')
			const expected = true
			expect(generated).toEqual(expected)

		})

		test('non-empty string', () =>
		{
			const generated = isDefined('This is only a test')
			const expected = true
			expect(generated).toEqual(expected)

		})

		test('zero number', () =>
		{
			const generated = isDefined(0)
			const expected = true
			expect(generated).toEqual(expected)

		})

		test('non-zero number', () =>
		{
			const generated = isDefined(42)
			const expected = true
			expect(generated).toEqual(expected)

		})

		test('true boolean', () =>
		{
			const generated = isDefined(true)
			const expected = true
			expect(generated).toEqual(expected)

		})

		test('false boolean', () =>
		{
			const generated = isDefined(false)
			const expected = true
			expect(generated).toEqual(expected)

		})

		test('null object', () =>
		{
			const generated = isDefined(null)
			const expected = true
			expect(generated).toEqual(expected)
		})

		test('non-null object', () =>
		{
			const generated = isDefined({})
			const expected = true
			expect(generated).toEqual(expected)
		})
	})
})
