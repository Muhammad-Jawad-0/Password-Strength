let pass = document.getElementById("password");
let msg = document.getElementById("massage");
let str = document.getElementById("strength");

pass.addEventListener("input", () => {
    if (pass.value.length > 0) {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
    }

    if (pass.value.length < 4) {
        str.innerHTML = "Weak";
        pass.style.borderColor = "#ff5952"
        msg.style.color = "#ff5952"
    }
    else if (pass.value.length >= 4 && pass.value.length < 8) {
        str.innerHTML = "Medium";
        pass.style.borderColor = "yellow"
        msg.style.color = "yellow"
    }
    else if (pass.value.length >= 8 && pass.value.length < 12) {
        str.innerHTML = "Stronge";
        pass.style.borderColor = "#26d730"
        msg.style.color = "#26d730"
    }
    else if (pass.value.length >= 12) {
        str.innerHTML = "Impressive Password";
        pass.style.borderColor = "skyBlue"
        msg.style.color = "skyBlue"
    }
});
