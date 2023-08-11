<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Typing Test</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>🧑‍💻Typing Tetser⏱️</h1>
    <div class="typing-container">
        <div id="text-to-type"></div>
        <textarea type="text" id="user-input" style="height: 300px;width: 60%;font-size: 20px;
        padding: 20px;" placeholder="Start typing..." disabled=true></textarea>
    </div>
    <p class="accuracy">Accuracy: <span>0%</span></p>
    <p class="speed">Speed: <span>10%</span></p>
    <div id="timer"></div>
    <button class="start-timer">Start Timer</button>
    <button class="reset-test">Reset</button>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="script.js"></script>
</body>
</html>
