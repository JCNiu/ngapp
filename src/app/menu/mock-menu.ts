// 左侧menu 数据
import { menu } from './menu';

export const MENUES: menu[] = [
    {
        index: 0, 
        name: '样式模拟',
        item: [{
            index: 0,
            name: '列表 list',
            url: '/c-listView'
        },
        {
            index: 0,
            name: '表格 table',
            url: '/c-tableView'
        }
        ]
    },
    {
        index: 1, 
        name: 'nz 样式', 
        url: '/list', 
    }
];