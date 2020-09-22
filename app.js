const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/pyramid', function(req, res) {
    const responseObject = isPyramid(req.body['word']);
    res.send(JSON.stringify(responseObject));
});

app.listen(3000);

const isPyramid = input => {
    let word = input.toLowerCase();
    // cleans all non-alphanumeric chars from input
    word = word.replace(/\W/g, '');

    const map = new Map();
    for (let i = 0; i < word.length; i++) {
        if (map.has(word.charAt(i)))
            map.set(word.charAt(i), map.get(word.charAt(i)) + 1);
        else
            map.set(word.charAt(i), 1);
    }

    const pairs = [];
    for (let [key, value] of map) 
        pairs.push([value, key]);
    pairs.sort((a, b) => a[0] - b[0]);

    let isPyr = pairs.length == 0 ? false : true;
    for (let i = 0; i < pairs.length; i++) {
        if (pairs[i][0] !== (i+1)) {
            isPyr = false;
            break;
        }
    }

    return {
        isPyramid: isPyr,
        pairs
    }
};
