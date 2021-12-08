import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import File from "../Models/File";

const fs = require('fs');
const path = require('path');
const readFile = require('fs/promises');

// filename, full path, file size, extension/file type and created date

// getting all files and folders
const getDirectories = async (req: Request, res: Response, next: NextFunction) => {
    // get some all files and folders

    let result: File[] = [] ;
    let content , type;
    const folderPath = __dirname.replace("controllers","data"); 

  
    
    fs.readdirSync(folderPath).forEach((file: any) => {
        let  stats= fs.statSync(path.join(folderPath,file));
        let filename = file; //file name
        let url = path.join(folderPath,file); //path url
        let fileSizeInBytes = stats.size; 
        let size = fileSizeInBytes; // file size in bytes
        let date  = stats.birthtime; // created date 2021-12-08T12:04:04.915Z
        
        let isDirectory = stats.isDirectory();
        if(isDirectory == false){
            content = fs.readFileSync(url);
           type = filename.split('.')[1] // extension
        }else{
           content = "null";
           type = "null";
        }
        

       
        
        let tempFile : File  = {
            filename: filename,
            path: url,
            size: size,
            createdDate: date,
            type: type,
            content : isDirectory === true ?  "" : content,
            isDirectory : isDirectory
        }
        
        result.push(tempFile);
    });
    let Files: File[]  = result;
    return res.status(200).json({
        results: result
    });
};

export default { getDirectories};
