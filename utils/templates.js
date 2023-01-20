import path from 'node:path'
import fs from 'node:fs'
import fse from 'fs-extra'
import * as url from 'url'

const { copySync } = fse

export function templateCopyists(type, _path) {
	const dirname = url.fileURLToPath(new URL('.', import.meta.url))

	try {
		copySync(path.join(dirname, `../template-${type}`), _path)
		return true
	} catch (error) {
		return false
	}
}

export function removeTemplateIfExist(path) {
	fs.existsSync(path) && fs.rmSync(path, { recursive: true, force: true })
}
