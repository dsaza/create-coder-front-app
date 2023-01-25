import inquirer from 'inquirer'
import { convertToSlug } from './helpers.js'

export const promptNameProject = async () => {
	const data = await inquirer.prompt({
		name: 'nameProject',
		message: 'Type the name of the project:',
		type: 'input',
		default: 'layout',
		validate(input) {
			const done = this.async()
			const rgxSlug = /^[a-z0-9-]+$/

			if (!input.match(rgxSlug)) {
				done(`Please type the project name in kebab-case, for example: ${convertToSlug(input)}`)
			}

			done(null, true)
		}
	})

	return data
}

export const promptTypeProject = async () => {
	const data = await inquirer.prompt({
		name: 'typeProject',
		message: 'Select the type of project:',
		type: 'list',
		choices: [
			{
				name: 'Codermk',
				value: 'codermk'
			},
			{
				name: 'Astro',
				value: 'astro'
			},
			{
				name: 'React',
				value: 'react'
			},
		],
	})

	return data
}
