export function isDefined<T>(arg: T | undefined): arg is T {
	return typeof arg !== 'undefined'
}

export function isNull(arg: object | null): arg is null {
	return typeof arg === 'object' && !arg
}
