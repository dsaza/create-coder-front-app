export function registerComponents(components = []) {
	components.forEach(component => component())
}
