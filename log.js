class logObject {
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
            this.logs_ERROR("未定义日志的级别");
            return;
        }
        this._logs_Utils(str, rank, sty);
    }

    logs_ALL(...str) {
        this._logs_Utils(str, "ALL", "color: black; background-color: rgb(139, 38, 255)");
    }

    logs_TRACE(...str) {
        this._logs_Utils(str, "TRACE", "color: black; background-color: rgb(38, 96, 255);");
    }

    logs_DEBUG(...str) {
        this._logs_Utils(str, "DEBUG", "color: black; background-color: rgb(255, 154, 38);");
    }

    logs_INFO(...str) {
        this._logs_Utils(str, "INFO", "color: black; background-color: rgb(157, 255, 66);");
    }

    logs_WARN(...str) {
        this._logs_Utils(str, "WARN", "color: black; background-color: rgb(255, 252, 66);");
    }

    logs_ERROR(...str) {
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

module.exports = logObject;
