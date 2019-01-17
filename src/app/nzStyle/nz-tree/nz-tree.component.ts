import { Component, OnInit } from '@angular/core';
import { NzFormatEmitEvent, NzTreeNode } from 'ng-zorro-antd';

@Component({
    selector: 'cnz-modal',
    templateUrl: 'nztree.component.html',
    styleUrls: ['nztree.component.scss']
})

export class nzTreeComponent implements OnInit {

    // 受控操作示例start-----------------------------------------------------------------
    defaultCheckedKeys = [ '0-0-0' ];
    defaultSelectedKeys = [];
    defaultExpandedKeys = [ '0-0', '0-0-0', '0-0-1' ];

    nodes = [ {
            title   : '0-0',
            key     : '0-0',
            expanded: true,
            children: [ {
                            title   : '0-0-0',
                            key     : '0-0-0',
                            children: [
                            { title: '0-0-0-0', key: '0-0-0-0', isLeaf: true },
                            { title: '0-0-0-1', key: '0-0-0-1', isLeaf: true },
                            { title: '0-0-0-2', key: '0-0-0-2', isLeaf: true }
                            ]
                        }, 
                        {
                            title   : '0-0-1',
                            key     : '0-0-1',
                            children: [
                                { title: '0-0-1-0', key: '0-0-1-0', isLeaf: true },
                                { title: '0-0-1-1', key: '0-0-1-1', isLeaf: true },
                                { title: '0-0-1-2', key: '0-0-1-2', isLeaf: true }
                            ]
                        }, 
                        {
                            title : '0-0-2',
                            key   : '0-0-2',
                            isLeaf: true
                        } ]
            }, 
            {
                title   : '0-1',
                key     : '0-1',
                children: [
                    { title: '0-1-0-0', key: '0-1-0-0', isLeaf: true },
                    { title: '0-1-0-1', key: '0-1-0-1', isLeaf: true },
                    { title: '0-1-0-2', key: '0-1-0-2', isLeaf: true }
                ]
            }, 
            {
                title : '0-2',
                key   : '0-2',
                isLeaf: true
            } ];

    nzEvent(event: NzFormatEmitEvent): void {
        console.log(event);
    }
    // 受控操作示例end----------------------------------------------------------------

    // 自定义图标start-------------------------------------------------------------------
    nodesicon = [
        {
          title   : 'parent 1',
          key     : '100',
          expanded: true,
          icon    : 'anticon-icon-man',
          children: [
            { title: 'leaf', key: '1001', icon: 'anticon-icon-man', isLeaf: true },
            { title: 'leaf', key: '1002', icon: 'anticon-icon-woman', isLeaf: true }
          ]
        }
    ];
    // 自定义图标end-------------------------------------------------------------------

    // 受控操作示例 + 自定义图标start-----------------------------------------------------------------
    defaultCheckedKeys2 = [ '0-0-0' ];
    defaultSelectedKeys2 = [];
    defaultExpandedKeys2 = [ '0-0', '0-0-0', '0-0-1' ];

    nodesicon2 = [ {
            title   : '0-0',
            key     : '0-0',
            expanded: true,
            icon    : 'anticon-icon-man',
            children: [ {
                            title   : '0-0-0',
                            key     : '0-0-0',
                            icon    : 'anticon-icon-man',
                            children: [
                            { title: '0-0-0-0', key: '0-0-0-0', icon: 'anticon-icon-woman', isLeaf: true },
                            { title: '0-0-0-1', key: '0-0-0-1', icon: 'anticon-icon-woman', isLeaf: true },
                            { title: '0-0-0-2', key: '0-0-0-2', icon: 'anticon-icon-woman', isLeaf: true }
                            ]
                        }, 
                        {
                            title   : '0-0-1',
                            key     : '0-0-1',
                            icon    : 'anticon-icon-woman',
                            children: [
                                { title: '0-0-1-0', key: '0-0-1-0', icon: 'anticon-icon-man', isLeaf: true },
                                { title: '0-0-1-1', key: '0-0-1-1', icon: 'anticon-icon-man', isLeaf: true },
                                { title: '0-0-1-2', key: '0-0-1-2', icon: 'anticon-icon-man', isLeaf: true }
                            ]
                        }, 
                        {
                            title : '0-0-2',
                            key   : '0-0-2',
                            icon: 'anticon-icon-woman',
                            isLeaf: true
                        } ]
            }, 
            {
                title   : '0-1',
                key     : '0-1',
                icon: 'anticon-icon-man',
                children: [
                    { title: '0-1-0-0', key: '0-1-0-0', icon: 'anticon-icon-man', isLeaf: true },
                    { title: '0-1-0-1', key: '0-1-0-1', icon: 'anticon-icon-man', isLeaf: true },
                    { title: '0-1-0-2', key: '0-1-0-2', icon: 'anticon-icon-man', isLeaf: true }
                ]
            }, 
            {
                title : '0-2',
                key   : '0-2',
                icon: 'anticon-icon-man',
                isLeaf: true
            } ];
    // 受控操作示例 + 自定义图标end----------------------------------------------------------------




    constructor() { }

    ngOnInit() { 
        console.log("nodesicon2=====================================>");
        console.log(this.nodesicon2);
        
    }

    
}