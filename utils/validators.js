import fs from 'node:fs'

export function existFolderProject(path) {
	return fs.existsSync(path)
}
