import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSortModule} from '@angular/material/sort';
import { FileListComponent } from './components/file-list/file-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShortenPathPipe } from './pipes/shorten-path.pipe';
import { ConvertBytesPipe } from './pipes/convert-bytes.pipe';


@NgModule({
  declarations: [
    PublicComponent,
    FileListComponent,
    ShortenPathPipe,
    ConvertBytesPipe
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatPaginatorModule,
    FontAwesomeModule
    
  ],
  exports : [
    PublicRoutingModule,
    FileListComponent
  ]
})
export class PublicModule { }
