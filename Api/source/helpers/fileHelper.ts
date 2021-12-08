const fs = require('fs');
const readFile = require('fs/promises')


async function createdDate(file : string){
    const {createdDate} = await fs.statSync(file);
    return createdDate;
}

async function isDirectory(path : string){
    const stats = await fs.statAsync(path)
    return stats.isDirectory();
}

async function size(name:string) {
    const {stats} = await fs.statAsync(name);
    // the size is in bytes
    return stats.size;

}

async function content(path: String){
    const {content} = await readFile(path,'utf8');
    return content;
}

async function type(name: String){
    const extension = name.split('.')[1];
    return extension;
}

