const fs = require('fs')
const { join, basename } = require('path')

module.exports = {
	name: 'ci-icons',

	inputDir: join(__dirname, './src/icons'),
	outputDir: join(__dirname, './public/icons'),

	fontTypes: ['woff', 'woff2'],
	assetTypes: ['css'],

	normalize: true,
	descent: 50,

	prefix: 'ci-',
	tag: '',

	getIconId: ({ basename, index }) => {
		let name = getIconName(basename, index)
		return name
	},

	codepoints: getCodepoints(),
}

function getCodepoints() {
	let initPoint = 57344
	let codepoints = {}
	let files = fs.readdirSync(join(__dirname, './src/icons'))

	let icons = files.map(file => {
		let nameWithoutExt = basename(file).replace('.svg', '')
		let indexClose = nameWithoutExt.indexOf(']')

		if (indexClose === -1) return nameWithoutExt
		return nameWithoutExt.slice(indexClose + 1, nameWithoutExt.length)
	})

	icons.forEach((icon, index) => {
		codepoints = {
			...codepoints,
			[icon]: initPoint + index,
		}
	})

	return codepoints
}

function getIconName(basename, index) {
	const errorFormatFileName = () =>
		`Icon name error "src/icons/${basename}.svg": Type a correct file name.\n\n  File name format: "[{index_icon}]{name_icon}.svg"\n`
	const errorFormatIndexIcon = indexIcon => {
		return `Icon name error "src/icons/${basename}.svg": The {index_icon} is not a number.\n\n  The incoming index is "[${indexIcon}]...". Has to be "[${index}]..."\n`
	}
	const errorOrderIndexIcons = indexIcon => {
		return `Icon name error "src/icons/${basename}.svg": The {index_icon} does not correspond.\n\n  The incoming index is "[${indexIcon}]...". Has to be "[${index}]..."\n`
	}

	const regexNumeric = /^[0-9]+$/

	let indexStart = basename.indexOf('[')
	let indexClose = basename.indexOf(']')

	let nameIcon = ''
	let indexIcon = ''

	if (indexStart === -1) throw errorFormatFileName()
	if (indexClose === -1) throw errorFormatFileName()

	indexIcon = basename.slice(indexStart + 1, indexClose)

	if (!indexIcon.match(regexNumeric)) throw errorFormatIndexIcon(indexIcon)
	if (parseInt(indexIcon) !== index) throw errorOrderIndexIcons(indexIcon)

	nameIcon = basename.slice(indexClose + 1, basename.length)

	return nameIcon
}
