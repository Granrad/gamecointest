
const base = require('./base771.json')
setInterval(function () {
    fs.writeFileSync("./base771.json", JSON.stringify(base, null, "\t"))
}, 60000); // Ð¾Ð±Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ðµ Ð±Ð°Ð·Ñ‹ Ð´Ð°Ð½Ð½Ñ‹Ñ…

let count = 1000000;
let users = 0;

while(count <= 633000000) {
	if (count < 632999997) {
	if (base[count]) {
		count += 1
		users += 1
		console.log(`YES ${count}`)
	} else {
		count += 1
		console.log(`NF ${count}`)
	}
} else {
	console.log(`${users} - users`)
}
}

async function run() {}