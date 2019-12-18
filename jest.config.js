module.exports = {
	roots: ['<rootDir>/sources'],
	moduleFileExtensions: ['ts', 'js'],
	testEnvironment: 'node',
	testRegex: '/tests/(.*).test.ts',
	transform: {
		'^.+\\.tsx?$': 'ts-jest'
	}
}
