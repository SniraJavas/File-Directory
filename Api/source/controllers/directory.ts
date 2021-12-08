import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import IFile from "../Interfaces/IFile"
const fs = require('fs');

// filename, full path, file size, extension/file type and created date

// getting all files and folders
const getDirectories = async (req: Request, res: Response, next: NextFunction) => {
    // get some all files and folders

    let result: IFile[] = [] ;
    const testFolder = __dirname.replace("controllers","data");  
  
    
    fs.readdirSync(testFolder).forEach((file: any) => {
        console.log("file ",file);
        result.push(file);
    });
    let Files: IFile[]  = result;
    return res.status(200).json({
        message: testFolder
    });
};

// // getting a single file or directory
// const getDirectory = async (req: Request, res: Response, next: NextFunction) => {
//     // get the file or directory id from the req
//     let id: string = req.params.id;
//     // get the file or directory
//     let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
//     let post: Post = result.data;
//     return res.status(200).json({
//         message: post
//     });
// };

export default { getDirectories};