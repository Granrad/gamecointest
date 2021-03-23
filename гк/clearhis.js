
const base = require('./base771.json')
setInterval(function () {
    fs.writeFileSync("./base771.json", JSON.stringify(base, null, "\t"))
}, 60000); // Ð¾Ð±Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ðµ Ð±Ð°Ð·Ñ‹ Ð´Ð°Ð½Ð½Ñ‹Ñ…

let count = 1000000;

while(count < 700000000) {
	if (base[count]) {
		base[count].transfers = []
		console.log(`${count} удалено`)
		count += 1
	} else {
		count += 1
		console.log(`error ${count}`)
	}
}

async function run() {}