import inquirer from 'inquirer'

export const promptNameProject = async () => {
	const data = await inquirer.prompt({
		name: 'nameProject',
		message: 'Type the name of the project:',
		type: 'input',
		default: 'layout'
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
