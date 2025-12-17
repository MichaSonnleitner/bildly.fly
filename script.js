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

document.getElementById("openPro").addEventListener("click", () => {
  document.getElementById("proOverlay").style.display = "flex";
});

document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("proOverlay");
  const openBtn = document.getElementById("openPro");
  const closeBtn = document.getElementById("closePro");

  openBtn.onclick = () => {
    overlay.style.display = "flex";
  };

  closeBtn.onclick = () => {
    overlay.style.display = "none";
  };
});

document.querySelectorAll(".new").forEach(el => {
  const price = Number(el.dataset.price);
  const discounted = (price * 0.7).toFixed(2);
  el.textContent = discounted + " €";
});

document.getElementById("applyDiscount").addEventListener("click", () => {
  const code = document.getElementById("discountCode").value.trim();
  if (code === "FrauKrenn50") {
    alert("Rabatt aktiviert! 50% Rabatt auf alle Pläne.");
    document.querySelectorAll(".new").forEach(el => {
      const price = Number(el.dataset.price);
      const discounted = (price * 0.5).toFixed(2); // nochmal extra Rabatt 50%
      el.textContent = discounted + " €";
    });
  } else {
    alert("Ungültiger Code!");
  }
});
