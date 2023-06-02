/**
 * @author   作者: Rain
 * @date 创建于 2023年 03月24日  11:07:17  星期五
 * @file_path  文件磁盘路径: E:\repository\rain_logs\log.js
 * @file_path  文件项目路径: log.js
 * @description 日志类
 */
export default class logObject {
    constructor({ isConsole = true, isConsoleStyle = false, markStr }) {
        this._isConsole = isConsole ? true : false;
        this._isConsoleStyle = isConsoleStyle ? true : false;
        this._markStr = markStr;
    }

    setIsConsole(isConsole) {
        this._isConsole = isConsole;
    }

    setIsConsoleStyle(isConsoleStyle) {
        this._isConsoleStyle = isConsoleStyle;
    }

    version_logs(version, url, bgColor = "#3c9cff") {
        if (version) {
            console.log(`%crbj v${version}`, `color: white; background-color: ${bgColor}; padding:3px 10px; margin: 10px;`, url);
        } else {
            this.ERROR("未传入版本参数");
        }
    }

    logs(rank, ...str) {
        if (!rank) {
            this.ERROR("未定义日志的级别");
            return;
        }
        this._logs_Utils(str, rank, "color: #000000");
    }

    ALL(...str) {
        this._logs_Utils(str, "ALL", "color: rgb(139, 38, 255);");
    }

    TRACE(...str) {
        this._logs_Utils(str, "TRACE", "color: rgb(38, 96, 255);");
    }

    DEBUG(...str) {
        this._logs_Utils(str, "DEBUG", "color: rgb(255, 93, 247);");
    }

    INFO(...str) {
        this._logs_Utils(str, "INFO", "color: #909399;");
    }

    WARN(...str) {
        this._logs_Utils(str, "WARN", "color: #f29100;");
    }

    ERROR(...str) {
        this._logs_Utils(str, "ERROR", "color: #fa3534;");
    }

    _logs_Utils(str, rank, sty) {
        if (this._isConsole) {
            let string = `${rank}  ${new Date().toLocaleString()}`;
            if (this._markStr) string = "[" + this._markStr + "]  " + string;
            if (this._isConsoleStyle) {
                console.log(`%c ${string}`, sty, ...str);
            } else {
                console.log(string, ...str);
            }
        }
    }
}
