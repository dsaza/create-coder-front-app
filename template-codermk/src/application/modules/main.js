import { mkStore } from '../stores/mkStore'
import { registerComponents } from '../components/+core'
import counter from '../components/counter'

document.addEventListener('DOMContentLoaded', () => {
	/**
	 * Components
	 */
	registerComponents([
		counter,
	])

	/**
	 * Store example
	 */
	const { getMkData, getMode, isDevelopment, isProduction } = mkStore()
	
	console.log({ mode: getMode(), mkdata: getMkData() })
	console.log({ isProduction: isProduction(), isDevelopment: isDevelopment() })
})
