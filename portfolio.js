function show(value) {
    if (value == "web" || value == "Impprojects") {
        document.getElementById("webdev").style.display = "block";
        document.getElementById("machinel").style.display = "none";
    }
    else if(value == "ML") {
        document.getElementById("machinel").style.display = "block";
        document.getElementById("webdev").style.display = "none";
    }
    
}