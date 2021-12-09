import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FileService } from '../../http/file.service';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileListComponent implements OnInit {

  files: File[] = [];
  public displayedColumns = ['Name', 'Extension', 'Path','Size', 'Date Created'];
  public dataSource = new MatTableDataSource<File>();

  constructor(private FileApiService : FileService) { }

  ngOnInit(): void {
    this.getFilesInformation();
  }


  getFilesInformation(){
    this.FileApiService.getFileInformation()
      .subscribe((res)=>{
        console.log(res);
        this.files = res;
        this.dataSource.data = res;
      })
  }

}
