import { isEmpty } from '../array'

describe('utils', () => {
	describe('isEmpty', () => {
		test('empty array', () => {
			const generated = isEmpty([])
			const expected = true
			expect(generated).toEqual(expected)
		})

		test('non-empty array', () => {
			const generated = isEmpty(['', ''])
			const expected = false
			expect(generated).toEqual(expected)
		})
	})
})
