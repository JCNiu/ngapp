// 左侧menu 数据
import { menu } from './menu';

export const MENUES: menu[] = [
    {
        index: 0, 
        name: '样式模拟',
        item: [{
            index: 0,
            name: 'list',
            url: '/c-listView'
        }]
    },
    {
        index: 1, 
        name: '列表 list', 
        url: '/list', 
    },
    {
        index: 2, 
        name: '表格 table', 
        url: '/table', 
    },
    {
        index: 3, 
        name: '输入框 input', 
        url: '/input', 
    },
    {
        index: 4, 
        name: '文字提示 tooltip', 
        url: '/tooltip', 
    },
];