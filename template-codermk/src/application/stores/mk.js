export function mkStore() {
	let mkdata = __mkdata
	return {
		getMkData() {
			return mkdata
		}
	}
}
