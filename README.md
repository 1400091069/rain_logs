### rain_logs 介绍

这是一个简洁的小型日志工具

### 使用方法

1. 导入并创建对象, 对象初始化

~~~js
import logObj from "rain_logs";
/**
 * @param isConsole boolean 类型 : 是否打印到控制台, 默认 true
 * @param isConsoleStyle 是否打印彩色日志, 默认值: false (注意: 此设置只在浏览器才能生效)
 */
var rain_log = new logObj(true, false);
rain_log.setIsConsole(true); // 动态设置是否 控制台打印, 默认值: true
rain_log.setIsConsoleStyle(true); // 动态设置是否 显示控制台日志的样式, 一般只在浏览器的控制台中生效, 默认值: false
rain_log.version_logs("1.0.0", "https://xxx.com", "orange"); // 日志打印, 版本标识
~~~

2. 使用对象的方法,  进行不同级别的日志记录

~~~js
/**
 * 自定义日志类型
 * @param rank 日志级别字符, 例: 'INFO', 可为 null
 * @param str 要打印的日志内容
 */
rain_log.logs("DEBUG", "logs String");

// 你还可以使用内部方法, 进行日志记录
rain_log.INFO("logs String");
rain_log.DEBUG("logs String");
rain_log.ALL("logs String");
rain_log.TRACE("logs String");
rain_log.WARN("logs String");
rain_log.ERROR("logs String");
~~~
