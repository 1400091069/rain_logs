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
     * @param optionObj 日志初始化参数对象
     */
    constructor(optionObj: {
        /**
         * 是否开启日志打印功能
         */
        isConsole: boolean;
        /**
         * 是否开启日志样式功能, 默认: false 不开启, 注意: 非 PC 浏览器此项不可用
         */
        isConsoleStyle: boolean;
        /**
         * 是否在打印日志时, 在日志的前面添加  [ 'markStr' ] 标志
         */
        markStr: string;
    });

    /**
     * 设置是否打印控制台
     * @param isConsole | boolean
     */
    setIsConsole(isConsole: boolean): void;

    /**
     * 设置是否开启日志的彩色标识模式, 非 PC 浏览器, 不可使用
     * @param isConsoleStyle | boolean
     */
    setIsConsoleStyle(isConsoleStyle: boolean): void;

    /**
     * 版本标识日志
     * @param version 版本号
     * @param url 仓库地址路径
     * @param bgColor 标识的背景颜色
     */
    version_logs(version: string, url: string, bgColor: string): void;

    /**
     * 自定义日志类型
     * @param rank 日志级别字符, 例: 'INFO'
     * @param sty 日志在控制台的样式, 非 PC 浏览器, 不可使用
     * @param str 要打印的日志内容
     */
    logs(rank: string, sty: string, ...str: any): void;

    /**
     * ALL 级别的日志
     * @param str 要打印的内容
     */
    ALL(...str: any): void;

    /**
     * TRACE 级别的日志
     * @param str 要打印的内容
     */
    TRACE(...str: any): void;

    /**
     * DEBUG 级别的日志
     * @param str 要打印的内容
     */
    DEBUG(...str: any): void;

    /**
     * INFO 级别的日志
     * @param str 要打印的内容
     */
    INFO(...str: any): void;

    /**
     * WARN 级别的日志
     * @param str 要打印的内容
     */
    WARN(...str: any): void;

    /**
     * ERROR 级别的日志
     * @param str 要打印的内容
     */
    ERROR(...str: any): void;
}
