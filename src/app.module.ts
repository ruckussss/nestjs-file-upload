import { Module } from '@nestjs/common';
import { FileUploadController } from './file-upload.controller';
import { FileUploadService } from './file-upload.service';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    // Configure Multer if needed for custom storage
    MulterModule.register({
      // You can configure Multer options here
      dest: './uploads', // Example of configuring destination folder
    }),
  ],
  controllers: [FileUploadController],
  providers: [FileUploadService],
})
export class AppModule {}
