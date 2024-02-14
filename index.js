function moveButton() {
    var button = document.getElementById("no");
    var container = document.getElementById("container");
    var containerRect = container.getBoundingClientRect();
    var buttonRect = button.getBoundingClientRect();
    
    var left = Math.random() * (containerRect.width - buttonRect.width);
    var top = Math.random() * (containerRect.height - buttonRect.height);
    
    button.style.position = "absolute";
    button.style.left = left + "px";
    button.style.top = top + "px";
}