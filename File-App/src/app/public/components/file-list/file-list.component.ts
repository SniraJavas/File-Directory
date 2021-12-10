import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FileService } from '../../http/file.service';
import { File } from '../../models/file';
import { faFolderPlus ,faFile} from '@fortawesome/free-solid-svg-icons';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})



export class FileListComponent implements OnInit {

  files: File[] = [];
  faFolderPlus = faFolderPlus;
  faFile = faFile;
  filteringUrl = "JobJack";
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

          this.files = data.sort((a,b) => (a.isDirectory < b.isDirectory) ? 1 : ((b.isDirectory < a.isDirectory) ? -1 : 0));
          this.dataSource.data = this.files ;
      },
      error: error => {
          console.error('There was an error!', error.message);
      }
  })
    
  }

}
