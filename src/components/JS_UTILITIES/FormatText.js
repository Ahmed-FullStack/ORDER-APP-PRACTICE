export default function formatName(name) {
	let spaceIndex = name.indexOf(` `)
	if (spaceIndex < 0) spaceIndex = name.length
	if (spaceIndex) {
		const firstNameChar = name.slice(0, 1).toUpperCase()
		const firstName = name.slice(1, spaceIndex)
		const lastNameChar = name
			.slice(spaceIndex, `${spaceIndex + 2}`)
			.toUpperCase()
		const lastName = name.slice(`${spaceIndex + 2}`, name.length)
		const fullName = firstNameChar + firstName + lastNameChar + lastName
		return fullName
	} else {
		const firstNameChar = name.slice(0, 1).toUpperCase()
		const firstName = name.slice(1, name.length)
		const fullName = firstNameChar + firstName
		return fullName
	}
}

function formatNameFully(name) {
	let spaceIndex = name.indexOf(` `)
	if (spaceIndex < 0) spaceIndex = name.length

	if (spaceIndex) {
		const firstNameChar = name.slice(0, 1).toUpperCase()
		const firstName = name.slice(1, spaceIndex)
		const lastNameChar = name
			.slice(spaceIndex, `${spaceIndex + 2}`)
			.toUpperCase()
		const lastName = name.slice(`${spaceIndex + 2}`, name.length)
		console.log(name.indexOf(` `) + 1)
		let fullName = firstNameChar + firstName + lastNameChar + lastName

		return fullName
	} else {
		const firstNameChar = name.slice(0, 1).toUpperCase()
		const firstName = name.slice(1, name.length)
		const fullName = firstNameChar + firstName
		return fullName
	}
}

export { formatNameFully }
