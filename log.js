var fs = require("fs");

class logObject {
    constructor(logUrl, isFile = false, isConsole = true, isConsoleStyle = false) {
        this._logUrl = logUrl;
        this._isFile = isFile ? true : false;
        this._isConsole = isConsole ? true : false;
        this._isConsoleStyle = isConsoleStyle ? true : false;
    }

    setIsConsole(isConsole) {
        this._isConsole = isConsole;
    }

    setIsFile(isFile) {
        this._isFile = isFile;
    }

    logs(str, rank, sty) {
        if (!rank) {
            this.logs_ERROR("未定义日志的级别");
            return;
        }
        this._logs_Utils(str, rank, sty);
    }

    logs_ALL(str) {
        this._logs_Utils(str, "ALL", "color: white; background-color: rgb(139, 38, 255)");
    }

    logs_TRACE(str) {
        this._logs_Utils(str, "TRACE", "color: white; background-color: rgb(38, 96, 255);");
    }

    logs_DEBUG(str) {
        this._logs_Utils(str, "DEBUG", "color: white; background-color: rgb(255, 154, 38);");
    }

    logs_INFO(str) {
        this._logs_Utils(str, "INFO", "color: white; background-color: rgb(157, 255, 66);");
    }

    logs_WARN(str) {
        this._logs_Utils(str, "WARN", "color: rgb(156, 156, 156); background-color: rgb(255, 252, 66);");
    }

    logs_ERROR(str) {
        this._logs_Utils(str, "ERROR", "color: white; background-color: red;");
    }

    _logs_Utils(str, rank, sty, _logUrl = this._logUrl) {
        if (!_logUrl) {
            throw "没有此文件路径!";
        }
        let string = `${rank}  ${new Date().toLocaleString()}  ${module.parent.filename}   ${str}\r\n`;
        if (this._isConsole) {
            if (this._isConsoleStyle) {
                console.log(`%c${string}`, `border-radius: 10px; padding: 10px; ${sty}`);
            } else {
                console.log(string);
            }
        }
        if (this._isFile) {
            fs.writeFile(
                _logUrl,
                string,
                {
                    encoding: "utf-8",
                    flag: "a",
                },
                (err) => {
                    if (err) throw "日志写入文件发生错误!";
                }
            );
        }
    }
}

module.exports = logObject;
