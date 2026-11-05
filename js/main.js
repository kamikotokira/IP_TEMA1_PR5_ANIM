function updateTimer() {
    const d = new Date();
    const s = 86400 - d.getHours() * 3600 - d.getMinutes() * 60 - d.getSeconds();
    
    document.getElementById('timer').textContent = 
        [Math.floor(s / 3600), Math.floor(s / 60) % 60, s % 60]
        .map(v => String(v).padStart(2, '0')).join(':');
}

updateTimer();
setInterval(updateTimer, 1000);