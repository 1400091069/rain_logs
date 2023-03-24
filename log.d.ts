/**
 * @author   作者: Rain
 * @date 创建于 2023年 03月24日  11:07:17  星期五
 * @file_path  文件磁盘路径: E:\repository\rain_logs\log.js
 * @file_path  文件项目路径: log.js
 * @description 日志类
 */
export default class logObject {
    /**
     * 日志对象初始化
     * @param isConsole 是否开启日志打印功能
     * @param isConsoleStyle 是否开启日志样式功能, 默认: false 不开启, 注意: 非 PC 浏览器此项不可用
     */
    constructor(isConsole: boolean, isConsoleStyle: boolean);

    /**
     * 设置是否打印控制台
     * @param isConsole | boolean
     */
    setIsConsole(isConsole: boolean): void;
    /**
     * 设置是否开启日志的样式模式, 非 PC 浏览器, 不可使用
     * @param isConsoleStyle | boolean
     */
    setIsConsoleStyle(isConsoleStyle: boolean): void;
    /**
     * 自定义日志级别
     * @param str 要打印的日志
     * @param rank 日志级别字符, 例: 'INFO'
     * @param sty 日志在控制台的样式, 非 PC 浏览器, 不可使用
     */
    logs(str: string, rank: string, sty: string): void;

    /**
     * ALL 级别的日志
     * @param str 要打印的内容
     */
    logs_ALL(str?: string | number | object | [] | {}): void;

    /**
     * TRACE 级别的日志
     * @param str 要打印的内容
     */
    logs_TRACE(str?: string | number | object | [] | {}): void;

    /**
     * DEBUG 级别的日志
     * @param str 要打印的内容
     */
    logs_DEBUG(str?: string | number | object | [] | {}): void;

    /**
     * INFO 级别的日志
     * @param str 要打印的内容
     */
    logs_INFO(str?: string | number | object | [] | {}): void;

    /**
     * WARN 级别的日志
     * @param str 要打印的内容
     */
    logs_WARN(str?: string | number | object | [] | {}): void;

    /**
     * ERROR 级别的日志
     * @param str 要打印的内容
     */
    logs_ERROR(str?: string | number | object | [] | {}): void;
}