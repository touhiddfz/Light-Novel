const params = new URLSearchParams(window.location.search);
let currentChapter = parseInt(params.get("chapter")) || 1;

function showChapter(chapter) {
    // Hide all chapters
    document.querySelectorAll('.chapter-content').forEach(div => {
        div.hidden = true;
    });

    // Show the current chapter
    const chapterDiv = document.getElementById(`chapter-${chapter}`);
    if (chapterDiv) {
        chapterDiv.hidden = false;
    }
}

// Show the initial chapter
showChapter(currentChapter);

document.getElementById("prev-btn")?.addEventListener("click", () => {
    if (currentChapter > 1) {
        currentChapter -= 1;
        window.location.href = `reader.html?chapter=${currentChapter}`;
    }
});

document.getElementById("next-btn")?.addEventListener("click", () => {
    if (currentChapter < 4) { // Assuming there are 4 chapters
        currentChapter += 1;
        window.location.href = `reader.html?chapter=${currentChapter}`;
    }
});
