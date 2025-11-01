import path from 'path';

// join two or more file
const fullPath = path.join('/users', 'john', 'documents', 'file.txt');
console.log('Joined Path:', fullPath); // Output: /users/john/documents/file.txt

// resolve to an absolute path
const absolutePath = path.resolve();
console.log('Absolute Path:', absolutePath); // Output: (depends on current working directory)

// get the directory name of a path
const dirName = path.dirname('/users/john/documents/file.txt');
console.log('Directory Name:', dirName); // Output: /users/john/documents

// extension of a file
const fileExt = path.extname('file.txt');
console.log('File Extension:', fileExt); // Output: .txt
if(fileExt === '.txt') {
    console.log('This is a text file.');
}else {
    console.log('This is not a text file.');
}

// get the base name of a file
const baseName = path.basename('/users/john/documents/file.txt');
console.log('Base Name:', baseName); // Output: file.txt

// parse a path into its components
const parsedPath = path.parse('/users/john/documents/file.txt');
console.log('Parsed Path:', parsedPath);
// Output: { root: '/', dir: '/users/john/documents', base: 'file.txt', ext: '.txt', name: 'file' }

