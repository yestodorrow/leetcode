//新生代内存 老生代内存


// v8 64为1.4g内存 新生代：64M内存  老生代1400MB  32位系统减半


//垃圾回收会中断程序的执行，所以将内存设置为1.4g

//减少全局变量的使用
//全局变量的销毁
//匿名执行函数变全局位局部
//尽量避免闭包
 