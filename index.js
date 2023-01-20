import path from 'node:path'
import { printHeader, printError, printSuccess, printCommands } from './utils/log.js'
import { removeTemplateIfExist, templateCopyists } from './utils/templates.js'
import { promptNameProject, promptTypeProject } from './utils/prompts.js'
import { existFolderProject } from './utils/validators.js'

async function main() {
	printHeader()
	
	const inputNameProject = await promptNameProject()
	const { nameProject } = inputNameProject

	const pathProject = path.join(process.cwd(), `./${nameProject}`)

	if (existFolderProject(pathProject)) {
		printError(`The folder "${nameProject}" already exists`)
		return
	}

	const optionsTypeProject = await promptTypeProject()
	const { typeProject } = optionsTypeProject

	const copySuccess = templateCopyists(typeProject, pathProject)

	if (!copySuccess) {
		printError(`The project "${nameProject}" was not created`)
		removeTemplateIfExist(pathProject)
		return
	}

	printSuccess(`The project "${nameProject}" was successfully created`)
	printCommands(nameProject)
}

main()