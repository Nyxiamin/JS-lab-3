document.addEventListener('DOMContentLoaded', function () {
    checkTheme();
});

document.getElementById('toggleThemeButton').addEventListener('click', function () {
    toggleTheme();
});

function toggleTheme() {
    var body = document.body;
    body.classList.toggle('dark-theme');
    var isDarkTheme = body.classList.contains('dark-theme');
    localStorage.setItem('isDarkTheme', isDarkTheme);
}

function checkTheme() {
    var body = document.body;
    var isDarkTheme = localStorage.getItem('isDarkTheme') === 'true';
    if (isDarkTheme) {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
}