const headings = [
    "GO AHEADDDD",
    "C'MON CHAMP!",
    "CHIN UP BRO :)"
];

const subtexts = [
    "You can & You will",
    "Rise, strive, shine, thrive",
    "Keep Movinggggg"
];

let currentIndex = 0;

setInterval(() => {
    const headingElement = document.getElementById("carousel-heading");
    const subtextElement = document.getElementById("carousel-subtext");

    currentIndex = (currentIndex + 1) % headings.length;

    headingElement.textContent = headings[currentIndex];
    subtextElement.textContent = subtexts[currentIndex];
}, 4000);
