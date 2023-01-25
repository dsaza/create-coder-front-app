import path from 'node:path'
import fs from 'node:fs'
import fse from 'fs-extra'
import * as url from 'url'

const { copySync } = fse

export function templateCopyists(type, _path, name) {
	const dirname = url.fileURLToPath(new URL('.', import.meta.url))

	try {
		copySync(path.join(dirname, `../template-${type}`), _path)

		const gitIgnoreFile = path.join(_path, './_gitignore')
		fs.renameSync(gitIgnoreFile, gitIgnoreFile.replace('_gitignore', '.gitignore'))

		const packageJsonFile = path.join(_path, './package.json')
		const packageText = fs.readFileSync(packageJsonFile, 'utf8')
		fs.writeFileSync(packageJsonFile, packageText.replace('name-project', name), null, 2)
		
		return true
	} catch (error) {
		return false
	}
}

export function removeTemplateIfExist(path) {
	fs.existsSync(path) && fs.rmSync(path, { recursive: true, force: true })
}
