/**
 * @author   作者: Rain
 * @date 创建于 2023年 03月24日  11:07:17  星期五
 * @file_path  文件磁盘路径: E:\repository\rain_logs\log.js
 * @file_path  文件项目路径: log.js
 * @description 日志类
 */
export default class logObject {
    constructor(isConsole = true, isConsoleStyle = false) {
        this._isConsole = isConsole ? true : false;
        this._isConsoleStyle = isConsoleStyle ? true : false;
    }

    setIsConsole(isConsole) {
        this._isConsole = isConsole;
    }

    setIsConsoleStyle(isConsoleStyle) {
        this._isConsoleStyle = isConsoleStyle;
    }

    logs(str, rank, sty) {
        if (!rank) {
            this.ERROR("未定义日志的级别");
            return;
        }
        this._logs_Utils(str, rank, sty);
    }

    ALL(...str) {
        this._logs_Utils(str, "ALL", "color: black; background-color: rgb(139, 38, 255)");
    }

    TRACE(...str) {
        this._logs_Utils(str, "TRACE", "color: black; background-color: rgb(38, 96, 255);");
    }

    DEBUG(...str) {
        this._logs_Utils(str, "DEBUG", "color: black; background-color: rgb(255, 154, 38);");
    }

    INFO(...str) {
        this._logs_Utils(str, "INFO", "color: black; background-color: rgb(157, 255, 66);");
    }

    WARN(...str) {
        this._logs_Utils(str, "WARN", "color: black; background-color: rgb(255, 252, 66);");
    }

    ERROR(...str) {
        this._logs_Utils(str, "ERROR", "color: white; background-color: red;");
    }

    _logs_Utils(str, rank, sty) {
        let string = `${rank}  ${new Date().toLocaleString()}`;
        if (this._isConsole) {
            if (this._isConsoleStyle) {
                console.log(`%c${string} ${str.join("")}`, `border-radius: 10px; padding: 10px; ${sty}`);
            } else {
                console.log(string, ...str);
            }
        }
    }
}
