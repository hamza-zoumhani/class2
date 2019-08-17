const data = require('./class-2-data.json')
const mailer = require('./mailer.js')

data.forEach(function (e) {
	const to = {
		name: e.name,
		...e.address
	}

	mailer.printLetter(to)
})