import pc from 'picocolors'

export function printHeader() {
	console.log(`\n${pc.bold(pc.blue('[C/] CREATE CODER APP'))}         ${pc.gray("Let's initialize a new coder project")}\n`)
}

export function printError(error) {
	console.log(`\n${pc.bold(pc.red('An error has occurred:'))}\n${pc.red(error)}\n`)
}

export function printSuccess(message) {
	console.log(`\n${pc.bold(pc.green('Good news:'))}\n${pc.green(message)}\n`)
}

export function printCommands(nameProject) {
	console.log(`${pc.gray(`cd ${nameProject}`) }\n${pc.gray('npm install')}\n${pc.gray('npm run dev')}\n`)
}

export function printBreak() {
	console.log('')
}