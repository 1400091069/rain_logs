### rain_logs presentation

This is a neat little journaling tool

## Use method:
1. Import, create, and initialize objects
Parameter 1: Set the log file generation path <br />
Parameter 2: Boolean type: whether to generates log files. Default: false <br />
Parameter 3: Boolean Type: whether to print to the console. Default: true
~~~js
Var rain_logs = new(require("rain_logs"))(" print log file path ", true, true);
~~~
2. Use object methods for different levels of logging
~~~js
Logs rain_logs. Logs (" String ", "DEBUG"); // Can be customized, log level, do not pass the second parameter, default no level
// You can also use internal methods for logging
rain_logs.logs_INFO("logs String");
rain_logs.logs_DEBUG("logs String");
rain_logs.logs_ALL("logs String");
rain_logs.logs_TRACE("logs String");
rain_logs.logs_WARN("logs String");
rain_logs.logs_ERROR("logs String");
~ ~ ~