import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { EtesterdbService } from '../../services/etesterdb.service';
import { Testwithresponse, Test, Testsegment, Testsection, Section, Question, Answer } from '../../models/etestermodel';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-testview',
  templateUrl: './testview.component.html',
  styleUrls: ['./testview.component.css']
})
export class TestviewComponent implements OnInit { 
  test: Test = {} as Test;
  testwithresponse: Testwithresponse = {} as Testwithresponse;
  testsegments: Testsegment[] = new Array();

  constructor(private etesterdbService: EtesterdbService) {
  }

  ngOnInit(): void {
       this.getData();
  }

  getData(){
    this.etesterdbService.getData().subscribe((data: Testwithresponse) => { 
      this.testwithresponse = data;
      this.test = data.test;
      this.testsegments = this.test.testsegments;
     } );
    }

}
