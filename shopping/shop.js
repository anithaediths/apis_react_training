const fs = require('fs');


const getShoppingItems = async (req, res) => {
    fs.readFile('shopping/shop.json', (err, data) => {
        if (err) throw err;
        let plans = JSON.parse(data);
        console.log(plans);
        res.status(200).json(plans);
    });

}

module.exports = getShoppingItems;
