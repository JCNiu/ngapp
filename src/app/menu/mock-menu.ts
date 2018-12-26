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
            url: '/csser-bevelangle'
        },
        {
            index: 1,
            name: '图片翻转 Flip',
            url: '/csser-antflip'
        },
        {
            index: 2,
            name: '滚动条 Scroll',
            url: '/csser-scroll'
        },
        {
            index: 3,
            name: '阴影 Shadow',
            url: '/csser-shadow'
        },
        {
            index: 4,
            name: '按钮动画 animate-button',
            url: '/csser-ant-button'
        },
        {
            index: 5,
            name: '字体 font',
            url: '/csser-font'
        },
        {
            index: 6,
            name: '输入框 input',
            url: '/csser-input'
        },
        {
            index: 7,
            name: '价格表 price-list',
            url: '/csser-price-list'
        },
        {
            index: 8,
            name: '导航 navigation',
            url: '/csser-navigation'
        },
        ]
    }
];