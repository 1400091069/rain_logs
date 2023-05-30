### rain_logs Introduction

This is a neat little logging tool

### Instructions

1. Import and create objects, object initialization

```js
import logObj from "rain_logs";
/**
* @param isConsole boolean type: whether to print to the console, default true
* @param isConsoleStyle whether to print color logs, default value: false (note: this setting only works in browsers)
*/
var rain_log = new logObj(true, false);
rain_log.setIsConsole(true); // Dynamically set whether to print to the console, default value: true
rain_log.setIsConsoleStyle(true); // Dynamically sets whether to display the console color log identity, generally only effective in the browser console, default value: false
rain_log.version_logs("1.0.0", "https://xxx.com", "orange"); // Log printing, version identification
```

2. Logging at different levels using object methods

```js
/**
* Custom log type
* @param rank log level character, example: 'INFO', can be null
* @param str the log content to be printed
*/
rain_log.logs("DEBUG", "logs String");

// You can also use internal methods for logging
rain_log.INFO("logs String");
rain_log. DEBUG("logs String");
rain_log.ALL("logs String");
rain_log.TRACE("logs String");
rain_log.WARN("logs String");
rain_log.ERROR("logs String");
```
