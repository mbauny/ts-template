const path = require('path')

module.exports = {
	rootDir: path.resolve(__dirname, '../../sources/'),
	moduleFileExtensions: ['ts', 'js'],
	testEnvironment: 'node',
	testRegex: '/tests/(.*).test.ts',
	transform: {
		'^.+\\.tsx?$': 'ts-jest'
	}
}
