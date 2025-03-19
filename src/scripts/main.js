// Theme Toggle functionality
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

function toggleTheme() {
    body.classList.toggle('dark-theme');
    // Save theme preference
    const isDark = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function setTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
    }
}

// Demo functionality
const generateButton = document.querySelector('.generate-button');
const promptInput = document.querySelector('.prompt-input');
const outputArea = document.querySelector('.output-area');

function handleGenerate(e) {
    e.preventDefault();
    const prompt = promptInput.value.trim();
    
    if (!prompt) {
        alert('Please enter a prompt');
        return;
    }

    // Simulate generation process
    outputArea.innerHTML = '<p>Generating...</p>';
    
    // Here you can add actual API call to your AI service
    setTimeout(() => {
        outputArea.innerHTML = `
            <p>Generated Response:</p>
            <p>This is a sample response based on your prompt.</p>
        `;
    }, 1000);
}

function initDemo() {
    if (generateButton) {
        generateButton.addEventListener('click', handleGenerate);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setTheme();
    themeToggle.addEventListener('click', toggleTheme);
    initDemo();
});