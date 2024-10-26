const form = document.querySelector('#greeting-form');
const greeting = document.querySelector('#greeting');
const dailyGreeting = document.querySelector('#daily-greeting');
const counter = document.querySelector(".counter-number");
const toggleButton = document.querySelector("#theme-toggle");

function saveName() {
    const name = document.querySelector('#name').value;
    localStorage.setItem('username', name);
    typeGreeting(`Hello, ${name}!`);
}

function typeGreeting(text) {
    let i = 0;
    greeting.textContent = "";
    const interval = setInterval(() => {
        if (i < text.length) {
            greeting.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
        }
    }, 100);
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    saveName();
});

window.onload = () => {
    const savedName = localStorage.getItem('username');
    if (savedName) {
        typeGreeting(`Welcome back, ${savedName}!`);
    }
    loadDailyGreeting();
    updateCounter();
    getGeolocation();
    loadTheme();
};

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const currentTheme = document.body.classList.contains("dark-mode") ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
});

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add("dark-mode");
    }
}

function loadDailyGreeting() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date().getDay();
    dailyGreeting.textContent = `Happy ${days[today]}!`;
}


async function updateCounter() {
    let response = await fetch("https://mhp7lbd6cmp65jglrczsfllz7u0xghkp.lambda-url.ap-south-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;
}
