document.addEventListener('DOMContentLoaded', () => {
    const buttonsContainer = document.getElementById('buttons');
    const popup = document.getElementById('popup');
    const messageElement = document.getElementById('message');
    const closeBtn = document.getElementById('close');

    // Add your custom messages here, one for each button from 1 to 100
    const messages = [
        "ΤΕΣΤ 1,θεωρητικά αυτό πρέπει να εμφανίζεται όταν πατάς το 1ο κουμπί, αν όχι είναι randomized, όχι ότι έχει κάποια σημασία :)",
        "Σ'αγαπώ μέλι, πολύ",
        "If you need to, darling, lean your weight to me We'll float away, but if we fall I only pray, don't fall away from me -I, carrion (Icarian) Hozier",
        "Distance means SO little when someone means SO much. - Απο εκείνο το παιχνίδι",
        "I love her, and that's the beginning and end of everything. - παιχνίδι",
        "Please stay, I want you, I need you, oh God",
        "Message for button 7",
        "Message for button 8",
        "Message for button 9",
        "Message for button 10",
        "Message for button 11",
        "Message for button 12",
        "Message for button 13",
        "Message for button 14",
        "Message for button 15",
        "Message for button 16",
        "Message for button 17",
        "Message for button 18",
        "Message for button 19",
        "Message for button 20",
        "Message for button 21",
        "Message for button 22",
        "Message for button 23",
        "Message for button 24",
        "Message for button 25",
        "Message for button 26",
        "Message for button 27",
        "Message for button 28",
        "Message for button 29",
        "Message for button 30",
        "Message for button 31",
        "Message for button 32",
        "Message for button 33",
        "Message for button 34",
        "Message for button 35",
        "Message for button 36",
        "Message for button 37",
        "Message for button 38",
        "Message for button 39",
        "Message for button 40",
        "Message for button 41",
        "Message for button 42",
        "Message for button 43",
        "Message for button 44",
        "Message for button 45",
        "Message for button 46",
        "Message for button 47",
        "Message for button 48",
        "Message for button 49",
        "Message for button 50",
        "Message for button 51",
        "Message for button 52",
        "Message for button 53",
        "Message for button 54",
        "Message for button 55",
        "Message for button 56",
        "Message for button 57",
        "Message for button 58",
        "Message for button 59",
        "Message for button 60",
        "Message for button 61",
        "Message for button 62",
        "Message for button 63",
        "Message for button 64",
        "Message for button 65",
        "Message for button 66",
        "Message for button 67",
        "Message for button 68",
        "Message for button 69",
        "Message for button 70",
        "Message for button 71",
        "Message for button 72",
        "Message for button 73",
        "Message for button 74",
        "Message for button 75",
        "Message for button 76",
        "Message for button 77",
        "Message for button 78",
        "Message for button 79",
        "Message for button 80",
        "Message for button 81",
        "Message for button 82",
        "Message for button 83",
        "Message for button 84",
        "Message for button 85",
        "Message for button 86",
        "Message for button 87",
        "Message for button 88",
        "Message for button 89",
        "Message for button 90",
        "Message for button 91",
        "Message for button 92",
        "Message for button 93",
        "Message for button 94",
        "Message for button 95",
        "Message for button 96",
        "Message for button 97",
        "Message for button 98",
        "Message for button 99",
        "Message for button 100"
    ];

    for (let i = 1; i <= 100; i++) {
        const button = document.createElement('button');
        button.textContent = `Button ${i}`;
        button.addEventListener('click', () => {
            messageElement.textContent = messages[i - 1];
            popup.classList.remove('hidden');
        });
        buttonsContainer.appendChild(button);
    }

    closeBtn.addEventListener('click', () => {
        popup.classList.add('hidden');
    });
});
