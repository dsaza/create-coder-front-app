import fs from 'node:fs'
import fse from 'fs-extra'
import globPkg from 'glob'

const { glob } = globPkg

const DIST_FOLDER = './dist'
const DIST_RELATIVE_FOLDER = './dist-relative'

main()

async function main() {
	fs.existsSync(DIST_RELATIVE_FOLDER) && fs.rmSync(DIST_RELATIVE_FOLDER, { force: true, recursive: true })
	fse.copySync(DIST_FOLDER, DIST_RELATIVE_FOLDER)
	
	const htmlFiles = await getFiles('**/*.html')
	replaceHtmlUrls(htmlFiles)

	const cssFiles = await getFiles('_astro/*.css')
	replaceCssUrls(cssFiles)
}

function replaceCssUrls(cssFiles) {
	for (const cssFile of cssFiles) {
		let contentFile = fs.readFileSync(cssFile, 'utf8')
		contentFile = String(contentFile).replace(/url\([.]{0,1}\//g, 'url(../')

		fs.writeFileSync(cssFile, contentFile)
	}
}

function replaceHtmlUrls(htmlFiles) {
	for (const htmlFile of htmlFiles) {
		const relativePath = getRelativePath(htmlFile)
		
		let contentFile = fs.readFileSync(htmlFile, 'utf8')
		contentFile = String(contentFile).replace(/src=["'][.]{0,1}\//g, `src="${relativePath}`)
		contentFile = String(contentFile).replace(/href=["'][.]{0,1}\//g, `href="${relativePath}`)
		contentFile = String(contentFile).replace(/component-url=["'][.]{0,1}\//g, `component-url="${relativePath}`)
		contentFile = String(contentFile).replace(/renderer-url=["'][.]{0,1}\//g, `renderer-url="${relativePath}`)
		contentFile = String(contentFile).replace(/url\([.]{0,1}\//g, `url(${relativePath}`)
		
		fs.writeFileSync(htmlFile, contentFile)
	}
}

function getRelativePath(relativePath) {
	const positionPath = countPositionPath(relativePath)

	if (positionPath === 1) return './'

	let pathAcc = ''

	for (let index = 1; index < positionPath; index++) {
		pathAcc += '../'
	}

	return pathAcc
}

function countPositionPath(relativePath) {
	const cleanPath = relativePath.replace(DIST_RELATIVE_FOLDER, '')
	const charsPath = cleanPath.split('')

	return charsPath.filter(char => char === '/').length
}

function getFiles(pattern) {
	return new Promise(resolve => {
		glob(`${DIST_RELATIVE_FOLDER}/${pattern}`, (error, files) => {
			if (error) resolve([])
			resolve(files)
		})
	})
}