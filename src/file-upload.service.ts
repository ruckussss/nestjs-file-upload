import { Injectable } from '@nestjs/common';
import { Express } from 'express';

@Injectable()
export class FileUploadService {
  async uploadFile(file: Express.Multer.File) {
    // Process the file as needed
    console.log(file); // This will log file details to the console
    return { message: 'File uploaded successfully!' };
  }
}
