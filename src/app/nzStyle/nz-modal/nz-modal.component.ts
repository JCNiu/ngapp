import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';

@Component({
    selector: 'cnz-modal',
    templateUrl: 'nzmodal.component.html',
    styleUrls: ['nzmodal.component.scss']
})

export class nzModalComponent implements OnInit {
    isVisible = false;
    isLayuiVisible = false;




    constructor(private modalService: NzModalService) { }

    ngOnInit() { }

    showModal(): void {
        this.isVisible = true;
    }
    
    handleOk(): void {
        console.log('Button ok clicked!');
        this.isVisible = false;
        this.isLayuiVisible = false;
        
    }
    
    handleCancel(): void {
        console.log('Button cancel clicked!');
        this.isVisible = false;
        this.isLayuiVisible = false;
    }

    showLayuiModal(): void {
        this.isLayuiVisible = true;
    }

    // 确认框模式
    showInfo(): void {
        this.modalService.info({
          nzTitle  : '<i>Do you Want to delete these items?</i>',
          nzContent: '<b>Some descriptions</b>',
          nzOnOk   : () => console.log('OK')
        });
    }
    showSuccess(): void {
        this.modalService.success({
          nzTitle  : '<i>Do you Want to delete these items?</i>',
          nzContent: '<b>Some descriptions</b>',
          nzOnOk   : () => console.log('OK')
        });
    }
    showError(): void {
        this.modalService.error({
          nzTitle  : '<i>Do you Want to delete these items?</i>',
          nzContent: '<b>Some descriptions</b>',
          nzOnOk   : () => console.log('OK')
        });
    }
    showWarning(): void {
        this.modalService.warning({
          nzTitle  : '<i>Do you Want to delete these items?</i>',
          nzContent: '<b>Some descriptions</b>',
          nzOnOk   : () => console.log('OK')
        });
    }
    showConfirm(): void {
        this.modalService.confirm({
          nzTitle  : '<i>Do you Want to delete these items?</i>',
          nzContent: '<b>Some descriptions</b>',
          nzOnOk   : () => console.log('OK')
        });
    }
}