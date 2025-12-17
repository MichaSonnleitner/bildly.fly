const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const messages = document.getElementById('messages');

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
    const text = userInput.value.trim();
    if (!text) return;

    // User-Nachricht
    const userMsg = document.createElement('div');
    userMsg.className = 'msg user';
    userMsg.textContent = text;
    messages.appendChild(userMsg);

    userInput.value = '';
    messages.scrollTop = messages.scrollHeight;

    // Dummy AI-Antwort
    setTimeout(() => {
        const aiMsg = document.createElement('div');
        aiMsg.className = 'msg ai';
        aiMsg.textContent = `AI in arbeit`;
        messages.appendChild(aiMsg);
        messages.scrollTop = messages.scrollHeight;
    }, 500);
}
//const cornerBtn = document.getElementById('cornerBtn');
//const proOverlay = document.getElementById('proOverlay');
//const closePro = document.getElementById('closePro');

//cornerBtn.addEventListener('click', () => {
//    proOverlay.style.display = 'flex';
//});

//closePro.addEventListener('click', () => {
//    proOverlay.style.display = 'none';
//});

document.getElementById("openPro").addEventListener("click", () => {
  document.getElementById("proOverlay").style.display = "flex";
});
