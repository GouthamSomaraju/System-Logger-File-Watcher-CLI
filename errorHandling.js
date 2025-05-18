const fs = require('fs').promises;

async function readFile() {
    try {
        await fs.readFile('missing.txt', 'utf8');
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.error('Error: File not found - missing.txt');
        } else {
            console.error('An error occurred:', err.message);
        }
    }
}

readFile().catch(err => {
    console.error('Unexpected error:', err.message);
});
