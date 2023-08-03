const btnEl = document.getElementById("btn");

const emojiNameEl = document.getElementById("emoji-name");

const emoji = [];

async function getEmoji() {
    let response = await fetch("https://emoji-api.com/emojis?access_key=1652cb821a6c9ebd419b1b5720876dd264eeb759")

    data = await response.json();

    for (let i = 0; i < 500; i++) {
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName
        });
    }
}

getEmoji();

btnEl.addEventListener("click", () => {
    const randomNum= Math.floor(Math.random()*emoji.length);

    btnEl.innerText= emoji[randomNum].emojiName;

    emojiNameEl.innerText= emoji[randomNum].emojiCode;
})