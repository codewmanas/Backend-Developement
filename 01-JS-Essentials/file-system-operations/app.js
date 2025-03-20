const fs = require('fs');
const path = require('path');

// File path
const filePath = path.join(__dirname, 'example.txt');

// Write to a file
fs.writeFile(filePath, 'Hello, File System!', (err) => {
     if (err) {
          return console.error('Error writing file:', err);
     }
     console.log('File written successfully.');

     // Read the file
     fs.readFile(filePath, 'utf8', (err, data) => {
          if (err) {
               return console.error('Error reading file:', err);
          }
          console.log('File content:', data);

          // Append to the file
          fs.appendFile(filePath, '\nAppending some text.', (err) => {
               if (err) {
                    return console.error('Error appending to file:', err);
               }
               console.log('Text appended successfully.');

               // Delete the file
               fs.unlink(filePath, (err) => {
                    if (err) {
                         return console.error('Error deleting file:', err);
                    }
                    console.log('File deleted successfully.');
               });
          });
     });
});