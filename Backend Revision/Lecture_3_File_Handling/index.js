import {readFile} from 'fs/promises';

// Async/Await Method to read file
const read_file = async (fileName) => {
    const data = await readFile(fileName, 'utf-8');
    console.log(data);
}   
read_file('sample.txt');


// Promise Method to read file
readFile('sample.txt', 'utf-8')
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });

// Callback Method to read file
import {readFile as readFileCallback} from 'fs';
readFileCallback('sample.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

// Synchronous Method to read file
import {readFileSync} from 'fs';
const data = readFileSync('sample.txt', 'utf-8');
console.log(data);

// create a file named sample2.txt and write "Hello My Name is xyz Kumar" in it.
import {writeFile} from 'fs/promises';
const write_file = async (fileName, data) => {
    await writeFile(fileName, data);
    console.log('File written successfully');
}
write_file('sample2.txt', 'Hello My Name is xyz Kumar');

// append "I am a student" in sample2.txt file.
import {appendFile} from 'fs/promises';
const append_file = async (fileName, data) => {
    await appendFile(fileName, data);
    console.log('File appended successfully');
}
append_file('sample2.txt', '\nI am a student');

// delete sample2.txt file.
import {unlink} from 'fs/promises';
const delete_file = async (fileName) => {
    await unlink(fileName);
    console.log('File deleted successfully');
}
// delete_file('sample2.txt');

// rename sample2.txt to sample3.txt
import {rename} from 'fs/promises';
const rename_file = async (oldFileName, newFileName) => {
    await rename(oldFileName, newFileName);
    console.log('File renamed successfully');
}
rename_file('sample2.txt', 'sample3.txt');

// create a directory named 'testDir'
// import {mkdir} from 'fs/promises';
// const create_directory = async (dirName) => {
//     await mkdir(dirName);
//     console.log('Directory created successfully');
// }

// create_directory('testDir');

// delete the directory named 'testDir'
import {rmdir} from 'fs/promises';
const delete_directory = async (dirName) => {
    await rmdir(dirName);
    console.log('Directory deleted successfully');
}
// delete_directory('testDir');

// folder testDir to add test.txt file inside it
import {writeFile as writeFile2} from 'fs/promises';
const write_file_in_directory = async (dirName, fileName, data) => {
    await writeFile2(`${dirName}/${fileName}`, data);
    console.log('File written in directory successfully');
}
write_file_in_directory('testDir', 'test.txt', 'This is a test file inside testDir directory.');