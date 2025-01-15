// console.log((process.argv).slice(2))
const fs = require('fs');
const path = require('path');

// Get the current working directory
process.chdir('./temp')
const currentDirectory = process.cwd();

fs.readdir(currentDirectory, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    files.forEach(file => {
        const filePath = path.join(currentDirectory, file);
        fs.stat(filePath, (err, stats) => {
            if (err) {
                console.error('Error getting file stats:', err);
                return;
            }

            if (stats.isDirectory()) {
                console.log(`[Folder] ${file}`);
            } else {
                console.log(`[File]   ${file}`);
            }
        });
    });
});
