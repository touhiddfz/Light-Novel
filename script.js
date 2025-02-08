const chapters = {
    1: "This is the content of Chapter 1. The adventure begins...",
    2: "This is the content of Chapter 2. A new power is discovered...",
    3: "This is the content of Chapter 3. The dark truth is revealed...",
    4: "This is the content of Chapter 4. A mysterious stranger appears...",
};

const params = new URLSearchParams(window.location.search);
let currentChapter = parseInt(params.get("chapter")) || 1;
const contentDiv = document.getElementById("content");

if (contentDiv) {
    contentDiv.innerHTML = `<h2>Chapter ${currentChapter}</h2><p>${chapters[currentChapter]}</p>`;
}

document.getElementById("prev-btn")?.addEventListener("click", () => {
    if (currentChapter > 1) {
        window.location.href = `reader.html?chapter=${currentChapter - 1}`;
    }
});

document.getElementById("next-btn")?.addEventListener("click", () => {
    if (currentChapter < Object.keys(chapters).length) {
        window.location.href = `reader.html?chapter=${currentChapter + 1}`;
    }
});
