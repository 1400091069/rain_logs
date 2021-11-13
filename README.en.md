### rain_ Logs introduction:

This is a simple small logging tool

### usage method:

1. Import and create objects and initialize them <br/>
Parameter 1: set the path of log file generation <br/>
Parameter 1: Boolean type: generate log file. The default value is false <br/>
Parameter 3: Boolean type: print to console. The default value is true
Parameter 4: print color log (Note: this setting can only take effect in the browser)

~~~js
var rain_logs = new(require("rain_logs"))("Log file path for printing", true, true, false);
rain_logs.setIsConsole(true) // Set whether to print on the console. The default value is true
rain_logs.setIsFile(true) // Set whether to generate log files. The default value is false
rain_logs.setIsConsoleStyle(true) // Set whether to display the console log style. Generally, it only takes effect in the browser console. The default value is false
rain_logs.setLogUrl(true) // Set the generation location (path) of the log file. The default value is:__ dirname
~~~

2. Use the method of object to log at different levels

~~~js
rain_logs.logs("logs String", "DEBUG");    // You can customize the log level. The second parameter is not passed. There is no level by default

// You can also use internal methods for logging
rain_logs.logs_INFO("logs String");
rain_logs.logs_DEBUG("logs String");
rain_logs.logs_ALL("logs String");
rain_logs.logs_TRACE("logs String");
rain_logs.logs_WARN("logs String");
rain_logs.logs_ERROR("logs String");
~~~