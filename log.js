var fs = require("fs");

class logObject {
    constructor(logUrl, isFile = false, isConsole = true) {
        this._logUrl = logUrl;
        this._isFile = isFile ? true : false;
        this._isConsole = isConsole ? true : false;
    }

    logs(str, rank = "") {
        this._logs_Utils(str, rank);
    }

    logs_ALL(str) {
        this._logs_Utils(str, "ALL");
    }

    logs_TRACE(str) {
        this._logs_Utils(str, "TRACE");
    }

    logs_DEBUG(str) {
        let string = `DEBUG ${new Date().toLocaleString()}    ${str}\r\n`;
        this._logs_Utils(str, "DEBUG");
    }

    logs_INFO(str) {
        this._logs_Utils(str, "INFO");
    }

    logs_WARN(str) {
        this._logs_Utils(str, "WARN");
    }

    logs_ERROR(str) {
        this._logs_Utils(str, "ERROR");
    }

    _logs_Utils(str, rank, _logUrl = this._logUrl) {
        if (!_logUrl) {
            throw "没有此文件路径!";
        }
        let string = `${rank}  ${new Date().toLocaleString()}    ${str}\r\n`;
        if (this._isConsole) {
            console.log(string);
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