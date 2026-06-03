const quotes = [
  "The quick brown fox jumps over the lazy dog and keeps running through the misty forest at dawn.",
  "In a world full of noise, clarity becomes the most powerful skill anyone can master.",
  "Every great journey begins with a single brave step into the unknown.",
  "Code is like humor. When you have to explain it, it’s probably not that good.",
  "The only way to do great work is to love what you do and keep learning every day.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "The future belongs to those who believe in the beauty of their dreams."
];

let currentQuote = "";
let timerInterval;
let timeLeft = 20;
let isRunning = false;
let correctChars = 0;
let totalCharsTyped = 0;

let audioContext;

function initAudio() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
}

function playFinishSound() {
  if (!audioContext) return;
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  
  osc.type = 'sine';
  osc.frequency.setValueAtTime(700, audioContext.currentTime);
  osc.frequency.linearRampToValueAtTime(1200, audioContext.currentTime + 0.6);
  
  gain.gain.setValueAtTime(0.4, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.8);
  
  osc.connect(gain);
  gain.connect(audioContext.destination);
  osc.start();
  osc.stop(audioContext.currentTime + 0.8);
}

const textDisplay = document.getElementById('text-display');
const input = document.getElementById('input');
const timerEl = document.getElementById('timer');
const wpmEl = document.getElementById('wpm');
const accuracyEl = document.getElementById('accuracy');
const results = document.getElementById('results');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function renderQuote(quote) {
  textDisplay.innerHTML = '';
  quote.split('').forEach(char => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    textDisplay.appendChild(span);
  });
}

function startTest() {
  initAudio();
  
  if (isRunning) return;
  
  currentQuote = getRandomQuote();
  renderQuote(currentQuote);
  
  input.value = '';
  input.disabled = false;
  input.focus();
  
  timeLeft = 20;
  correctChars = 0;
  totalCharsTyped = 0;
  isRunning = true;
  
  timerEl.textContent = timeLeft;
  wpmEl.textContent = '0';
  accuracyEl.textContent = '100';
  
  startBtn.classList.add('hidden');
  restartBtn.classList.remove('hidden');
  
  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft <= 0) endTest();
  }, 1000);
}

function calculateWPM() {
  const words = input.value.trim().split(/\s+/).length;
  const minutes = (20 - timeLeft) / 60;
  return minutes > 0 ? Math.floor(words / minutes) : 0;
}

function calculateAccuracy() {
  return totalCharsTyped === 0 ? 100 : Math.round((correctChars / totalCharsTyped) * 100);
}

function endTest() {
  clearInterval(timerInterval);
  isRunning = false;
  input.disabled = true;
  
  const finalWPM = calculateWPM();
  const finalAcc = calculateAccuracy();
  
  document.getElementById('final-wpm').textContent = finalWPM;
  document.getElementById('final-acc').textContent = finalAcc;
  document.getElementById('final-chars').textContent = `\( {correctChars}/ \){totalCharsTyped}`;
  
  results.classList.remove('hidden');
  playFinishSound();
}

input.addEventListener('input', () => {
  if (!isRunning) return;
  
  const typed = input.value;
  totalCharsTyped = typed.length;
  correctChars = 0;
  
  const spans = textDisplay.querySelectorAll('span');
  
  spans.forEach((span, i) => {
    if (i >= typed.length) {
      span.className = '';
    } else if (typed[i] === span.textContent || (span.textContent === '\u00A0' && typed[i] === ' ')) {
      span.className = 'correct';
      correctChars++;
    } else {
      span.className = 'incorrect';
    }
  });
  
  wpmEl.textContent = calculateWPM();
  accuracyEl.textContent = calculateAccuracy();
  
  if (typed.length >= currentQuote.length) endTest();
});

startBtn.addEventListener('click', startTest);
restartBtn.addEventListener('click', () => { 
  results.classList.add('hidden'); 
  startTest(); 
});
document.getElementById('try-again').addEventListener('click', () => { 
  results.classList.add('hidden'); 
  startTest(); 
});
