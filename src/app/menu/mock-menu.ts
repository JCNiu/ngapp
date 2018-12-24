// 左侧menu 数据
import { menu } from './menu';

export const MENUES: menu[] = [
    {
        index: 0, 
        name: '样式模拟',
        item: [{
            index: 0,
            name: '列表 list',
            url: '/c-listview'
        },
        {
            index: 0,
            name: '表格 table',
            url: '/c-tableview'
        }
        ]
    },
    {
        index: 1, 
        name: 'nz 样式', 
        url: '/list', 
    },
    {
        index: 2, 
        name: 'CSSer', 
        item: [{
            index: 0,
            name: '斜切角 bevelangle',
            url: '/cssEr-bevelangle'
        },
        {
            index: 1,
            name: '图片翻转 Flip',
            url: '/cssEr-antflip'
        },
        {
            index: 2,
            name: '滚动条 Scroll',
            url: '/cssEr-scroll'
        },
        {
            index: 3,
            name: '阴影 Shadow',
            url: '/cssEr-shadow'
        },
        {
            index: 4,
            name: '按钮动画 animate-button',
            url: '/ant-button'
        },
        ]
    }
];