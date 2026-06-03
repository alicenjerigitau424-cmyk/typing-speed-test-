* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  background: linear-gradient(135deg, #0f0f1a, #1a1a2e);
  color: #e0e0ff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}

.container {
  max-width: 860px;
  width: 92%;
  background: rgba(20, 20, 35, 0.95);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 100, 255, 0.1);
}

header h1 {
  text-align: center;
  font-size: 2.8rem;
  background: linear-gradient(90deg, #a5b4fc, #c4d0ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  letter-spacing: -1px;
}

.stats {
  display: flex;
  justify-content: space-around;
  background: rgba(15, 15, 30, 0.8);
  padding: 14px 20px;
  border-radius: 12px;
  margin-bottom: 2rem;
  font-size: 1.25rem;
  border: 1px solid rgba(100, 100, 255, 0.15);
}

.text-display {
  font-size: 1.45rem;
  line-height: 2.1;
  margin: 1.5rem 0;
  padding: 2rem;
  background: #111118;
  border-radius: 16px;
  min-height: 260px;
  max-height: 320px;
  overflow-y: auto;
  user-select: none;
  white-space: pre-wrap;
  border: 1px solid rgba(80, 80, 200, 0.2);
  box-shadow: inset 0 4px 12px rgba(0, 0, 0, 0.4);
}

.text-display span {
  transition: all 0.1s ease;
}

.correct { color: #67e8a5; }
.incorrect { color: #f87171; background: rgba(248, 113, 113, 0.15); }
.current { background: #6366f1; color: white; padding: 2px 6px; border-radius: 4px; }

textarea {
  width: 100%;
  height: 160px;
  background: #111118;
  color: #e0e0ff;
  border: 2px solid rgba(100, 100, 255, 0.3);
  border-radius: 16px;
  padding: 1.2rem;
  font-size: 1.2rem;
  resize: none;
  outline: none;
  font-family: inherit;
  margin-bottom: 1.5rem;
}

textarea:focus {
  border-color: #6366f1;
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.15);
}

.controls {
  text-align: center;
}

button {
  padding: 16px 40px;
  font-size: 1.15rem;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  background: linear-gradient(90deg, #6366f1, #818cf8);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);
}

button:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 25px rgba(99, 102, 241, 0.4);
}

.results {
  text-align: center;
  margin-top: 2rem;
  padding: 2.5rem;
  background: rgba(15, 15, 30, 0.9);
  border-radius: 16px;
  border: 1px solid rgba(100, 100, 255, 0.2);
}

.result-stats p {
  font-size: 1.6rem;
  margin: 16px 0;
  font-weight: 500;
}

.hidden { display: none !important; }
