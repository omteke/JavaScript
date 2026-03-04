const gamingWords = ["Shadow", "Sniper", "Blaze", "Phantom", "Viper", "Rogue", "Venom"];
const instaWords = ["Vibes", "Soul", "Dream", "Vibe", "Glow", "Aura", "Mood"];
const brandWords = ["Tech", "Labs", "Solutions", "Digital", "Hub", "Innovations", "Works"];

function randomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateUsername() {
    const category = document.getElementById("category").value;
    const resultField = document.getElementById("result");

    let username = "";
    let randomNumber = Math.floor(Math.random() * 999);

    if (category === "gaming") {
        username = randomElement(gamingWords) + randomNumber;
    }
    else if (category === "instagram") {
        username = randomElement(instaWords) + "_" + randomNumber;
    }
    else if (category === "brand") {
        username = randomElement(instaWords) + randomElement(brandWords);
    }

    resultField.value = username;
}

function copyUsername() {
    const resultField = document.getElementById("result");
    navigator.clipboard.writeText(resultField.value);
    alert("Username Copied!");
}