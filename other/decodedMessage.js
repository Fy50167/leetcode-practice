const fs = require('fs');

function decodeFile(file) {
    // Get all content from .txt file
    const content = fs.readFileSync(file, 'utf8');

    // Trim all white space, then split lines into elements in an array while removing new line instances
    const lines = content.trim().split(/\r?\n/).filter(Boolean);

    // Convert elements into arrays separating number and word in order to sort based on numeric value in position 0
    const sortedElements = lines.map(line => line.split(' ')).sort((a, b) => a[0] - b[0]);

    // Array to contain final output
    let message = [];

    // Decode message by adding rightmost elements to message array
    let lineAdd = 0;
    for (let i = 0; i < sortedElements.length; i++) {
        i += lineAdd;
        message.push(sortedElements[i][1]);
        lineAdd++;
    }

    // Join array elements to make one sentence.
    message = message.join(' ') + '.';
    console.log(message);
}

decodeFile('input.txt');