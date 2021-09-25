//dashboard
function loadStats() {
    var progressBar = document.getElementById("progress");
    var completedKuralCount = document.getElementById("completed-kural");
    var streak = document.getElementById("streak-value");
    var streakValue = 13;
    var kural = 7;
    var completedKural = 132;
    loadData(progressBar, kural, 100);
    loadData(completedKuralCount, completedKural, 5);
    loadData(streak, streakValue, 50);
}


function loadData(type, data, time) {
    var width = 1;
    var setData = setInterval(load, time);
    function load() {
        if (width >= data) {
            clearInterval(setData);
        } else {
            width++;
            type.style.width = width * 10 + '%';
            type.innerHTML = width * 1;
        }
    }
}

