document.getElementById("new_game").onclick = function () {
    location.href = "Pages/newentry.html";
};

document.getElementById("leader_board").onclick = function () {
    location.href = "Pages/leaderboard.html";
};

document.getElementById("instructions").onclick = function () {
    swal({
        title: "INSTRUCTIONS",
        text: "Use the keys W and D to move left and right. Avoid the spikes and falling down without a platform to land on. Watch out for pickups.Blue pickups give you a score boost , red pickups slow down the speed of the game for 5 seconds and green pickups provide you with lives. Watch out for spikey and disappearing platforms.",
        button: "Go Back!!",
    }).then(function () {
        window.location = "index.html";
    })
};

