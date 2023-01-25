import { registerComponents } from '../components/+core'
import counter from '../components/counter'

document.addEventListener('DOMContentLoaded', () => {
	/**
	 * Components
	 */
	registerComponents([
		counter,
	])
})
