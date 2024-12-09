function toggleWindow() {
    var windowElement = document.getElementById("myWindow");
    if (windowElement.style.display === "none" || windowElement.style.display === "") {
        windowElement.style.display = "block";
        windowElement.classList.add('window-appear')
    } else {
        windowElement.style.display = "none";
    }
}

function toggleWindow2() {
    var windowElement = document.getElementById("myWindow2");
    if (windowElement.style.display === "none" || windowElement.style.display === "") {
        windowElement.style.display = "block";
        windowElement.classList.add('window-appear')
    } else {
        windowElement.style.display = "none";
    }
}

function toggleWindow3() {
    var windowElement = document.getElementById("myWindow3");
    if (windowElement.style.display === "none" || windowElement.style.display === "") {
        windowElement.style.display = "block";
        windowElement.classList.add('window-appear')
    } else {
        windowElement.style.display = "none";
    }
}

function toggleWindow4() {
    var windowElement = document.getElementById("myWindow3");
    if (windowElement.style.display === "none" || windowElement.style.display === "") {
        windowElement.style.display = "block";
        windowElement.classList.add('window-appear')
    } else {
        windowElement.style.display = "none";
        windowElement.classList.remove('window-appear')
    }
}

