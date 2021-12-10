import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FileService } from '../../http/file.service';
import { File } from '../../models/file';


@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})



export class FileListComponent implements OnInit {

  files: File[] = [];

  displayedColumns: string[] = ['symbol','name', 'extension', 'path','size', 'date'];
  dataSource = new MatTableDataSource<File>();
  clickedRows = new Set<File>();
  constructor(private FileApiService : FileService) { }

  ngOnInit(): void {
    this.getFilesInformation();
  }


  getFilesInformation(){
    this.FileApiService.getFileInformation().subscribe({
      next: data => {

          this.files = data;
          this.dataSource.data = this.files ;
      },
      error: error => {
          console.error('There was an error!', error.message);
      }
  })
    
  }

}
