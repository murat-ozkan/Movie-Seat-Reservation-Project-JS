To create a screen saver clock in Windows using JavaScript, you need to follow these steps:

1. Create a new HTML file and add the following code to it to create the basic structure of the clock:

```
<!DOCTYPE html>
<html>
<head>
  <title>Screen Saver Clock</title>
  <style>
    #clock {
      font-size: 50px;
      font-weight: bold;
      text-align: center;
      margin-top: 50vh;
      transform: translateY(-50%);
    }
  </style>
</head>
<body>
  <div id="clock"></div>

  <script>
    // JavaScript code to update the clock goes here
  </script>
</body>
</html>
```

2. In the JavaScript code section, add the following code to update the clock display with the current time:

```
function updateClock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const clockDisplay = document.getElementById("clock");
  clockDisplay.innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
```

3. Save the HTML file and open it in a web browser to see the clock in action.

Note: To turn this into a screen saver, you will need to convert the HTML file into an executable file (such as a screensaver .scr file) and configure it to run as your screen saver. The exact steps to do this will depend on your operating system.