export class menu {
    index: number;  // 索引
    name: string;   // 标题
    url?: string;    // 路由地址
    item?: menuItem[];
}

class menuItem {
    index: number;
    name: string;
    url: string;
}