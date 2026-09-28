* {
  box-sizing: border-box;
}

html, body, #root {
  margin: 0;
  min-height: 100%;
  height: 100%;
  font-family: Inter, 'Segoe UI', sans-serif;
  background: #f3f3f1;
}

button, input {
  font: inherit;
}

body {
  display: grid;
  place-items: center;
}

.app-shell {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--page);
}

.phone {
  width: 100%;
  max-width: 440px;
  min-height: 100vh;
  background: var(--page);
  color: var(--text-dark);
  position: relative;
  border-left: 1px solid var(--border);
  border-right: 1px solid var(--border);
}

.topbar {
  background: var(--primary);
  color: var(--white);
  padding: 18px 18px 16px;
  box-shadow: inset 0 -1px 0 rgba(255,255,255,0.08);
}

.status-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  letter-spacing: 0.4px;
  font-weight: 700;
  margin-bottom: 16px;
  color: rgba(255,255,255,0.96);
}

.status-icons {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.chat-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.icon-button {
  background: transparent;
  border: none;
  color: var(--white);
  width: 34px;
  height: 34px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  opacity: 0.95;
  transition: opacity 0.2s ease;
  cursor: pointer;
}

.icon-button:hover {
  opacity: 1;
}

.profile-block {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  min-width: 0;
}

.avatar-ring {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f4d76b 0%, #d7b96a 100%);
  border: 2px solid rgba(255,255,255,0.6);
  padding: 3px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
}

.avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  display: block;
}

.profile-copy {
  min-width: 0;
}

.profile-copy h1 {
  margin: 0;
  font-size: 2.1rem;
  line-height: 1.1;
  letter-spacing: -0.04em;
  font-weight: 700;
  color: rgba(255,255,255,0.97);
}

.profile-copy p {
  margin: 2px 0 0;
  font-size: 0.92rem;
  color: rgba(255,255,255,0.72);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 4px;
}

.chat-area {
  height: calc(100vh - 178px);
  overflow: hidden;
  padding: 0 18px 12px;
  background: var(--page);
}

.privacy-banner {
  margin-top: 20px;
  background: var(--banner);
  border: 1px solid rgba(175, 149, 94, 0.4);
  border-radius: 16px;
  padding: 14px 18px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: var(--text-dark);
}

.banner-icon-wrap {
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
}

.privacy-banner p {
  margin: 0;
  font-size: 1.08rem;
  line-height: 1.38;
  color: #1d2430;
}

.privacy-banner span {
  font-weight: 700;
  color: var(--primary);
}

.date-pill {
  margin: 22px auto 20px;
  width: fit-content;
  background: rgba(0,0,0,0.06);
  border-radius: 999px;
  color: #5b6670;
  padding: 8px 18px;
  font-size: 0.9rem;
  font-weight: 600;
}

.message-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 8px;
}

.message-row {
  display: flex;
  width: 100%;
}

.message-row.sent {
  justify-content: flex-end;
}

.message-row.received {
  justify-content: flex-start;
}

.bubble-wrap {
  max-width: 72%;
}

.message-bubble {
  display: inline-flex;
  align-items: center;
  padding: 12px 18px 12px 18px;
  border-radius: 24px 24px 8px 24px;
  background: var(--bubble-sent);
  color: var(--white);
  font-size: 1.04rem;
  font-weight: 600;
  line-height: 1.4;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.08);
}

.message-row.received .message-bubble {
  background: var(--bubble-received);
  color: var(--text-dark);
  border-radius: 24px 24px 24px 8px;
}

.message-meta {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 6px;
  margin-top: 6px;
  padding-right: 8px;
  color: var(--text-soft);
  font-size: 0.76rem;
  font-weight: 600;
}

.message-row.received .message-meta {
  justify-content: flex-start;
  padding-left: 8px;
}

.checkmark {
  font-size: 0.85rem;
  opacity: 0.9;
}

.composer {
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--page);
  border-top: 1px solid var(--border);
  padding: 10px 12px 18px;
}

.composer-icons-left {
  display: flex;
  align-items: center;
  gap: 6px;
}

.emoji-button,
.attach-button,
.voice-button {
  border: none;
  background: transparent;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.emoji-button,
.attach-button {
  color: var(--text-muted);
}

.input-shell {
  flex: 1;
  background: rgba(255,255,255,0.2);
  border: 1px solid var(--border);
  border-radius: 999px;
  overflow: hidden;
}

.input-shell input {
  width: 100%;
  border: none;
  background: transparent;
  outline: none;
  padding: 14px 18px;
  font-size: 1.05rem;
  color: var(--text-dark);
}

.input-shell input::placeholder {
  color: var(--text-muted);
}

.voice-button {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--accent);
  color: var(--primary-dark);
  box-shadow: 0 3px 12px rgba(215, 185, 106, 0.35);
}

@media (max-width: 450px) {
  .profile-copy h1 {
    font-size: 1.8rem;
  }

  .privacy-banner p {
    font-size: 1rem;
  }

  .bubble-wrap {
    max-width: 80%;
  }
}
