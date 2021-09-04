### rain_logs 介绍:

这是一个简洁的小型日志工具

### 使用方法:

1. 导入并创建对象, 对象初始化 <br/>
参数一: 设置日志文件生成的路径 <br/>
参数一: boolean 类型: 是否生成日志文件, 默认 false <br/>
参数三: boolean 类型 : 是否打印到控制台, 默认 true

~~~js
var rain_logs = new(require("rain_logs"))("打印的日志文件路径", true, true);
~~~

2. 使用对象的方法,  进行不同级别的日志记录

~~~js
rain_logs.logs("logs String", "DEBUG");    // 可以自定义, 日志级别, 不传第二个参数, 默认没有级别

// 你还可以使用内部方法, 进行日志记录
rain_logs.logs_INFO("logs String");
rain_logs.logs_DEBUG("logs String");
rain_logs.logs_ALL("logs String");
rain_logs.logs_TRACE("logs String");
rain_logs.logs_WARN("logs String");
rain_logs.logs_ERROR("logs String");
~~~