document.getElementById('closePopup').onclick = function() {
    document.getElementById('popupOverlay').style.display = 'none';
};

window.onclick = function(event) {
    if (event.target == document.getElementById('popupOverlay')) {
        document.getElementById('popupOverlay').style.display = 'none';
    }
};