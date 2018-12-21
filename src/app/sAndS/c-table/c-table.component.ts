import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'cc-tableView',
    templateUrl: 'c-table.component.html',
    styleUrls: ['c-table.component.scss']
})

export class cTableComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        this.getMock(this.row, this.col);
    }
    
    // 模拟数据
    row: number = 10;
    col: number = 10;
    theadDate: any[] = [];
    tbodyDate: any[] = [];
    setMock(row: number, col: number) {
        this.resetMock();
        for (let i = 0; i < row; i++) {
            this.tbodyDate[i] = [];
            for (let j = 0; j < col; j++) {
                this.tbodyDate[i][j] = (i + 1) + '-' + (j + 1);
            }
        }
        for (let i = 0; i < col; i++) {
            this.theadDate[i] = 'col-' + (i + 1); 
        }
    }
    getMock(row:number, col:number) {
        this.setMock(row, col);
        
    }
    resetMock() {
        this.theadDate = [];
        this.tbodyDate = [];
    }
    mockChange() {
        if ((this.row < 100 && this.row > 0) && (this.col < 40 && this.col > 0)) {
            this.getMock(this.row, this.col);
        } 
    }
    
}