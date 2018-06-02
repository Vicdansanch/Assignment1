const csvFilePath=('./customer-data.csv')
const csv = require('csvtojson')

const fs = require('fs')
const path = require ('path')


 csv({ 
		})
    .fromFile(csvFilePath)
    .then((jsonObj)=>{	
		const JsonString = JSON.stringify(jsonObj,null,4)
    fs.writeFileSync(path.join(__dirname, 'customer-data.json') , JsonString, (err) => {
		if (err) {
			console.error(err);
			return;
};
	});
	console.log(Array.from(jsonObj))
	
	});
	
	