export function mkStore() {
	const mkdata = __mkdata
	const mode = __mode

	return {
		getMkData: () => mkdata,
		getMode: () => mode,
		isProduction: () => mode === 'production',
		isDevelopment: () => mode === 'development',
	}
}
