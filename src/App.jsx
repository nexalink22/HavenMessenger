import { useMemo, useState } from 'react';
import {
  ArrowLeft,
  MoreVertical,
  Bell,
  Camera,
  Paperclip,
  Smile,
  Mic,
  Sun,
  Moon,
  ShieldCheck,
} from 'lucide-react';

const lightColors = {
  page: '#f3f3f1',
  primary: '#1f4e6b',
  primaryDark: '#143a52',
  primarySoft: '#e9edf3',
  accent: '#d7b96a',
  bubbleSent: '#1f4e6b',
  bubbleReceived: '#e8edf3',
  textDark: '#1e2a36',
  textMuted: '#6d7a85',
  textSoft: '#7f8d99',
  border: '#d8dee4',
  chip: '#f1f3f5',
  banner: '#f4e8bf',
  input: '#f8f8f8',
  icon: '#2d4053',
  white: '#ffffff',
};

const darkColors = {
  page: '#0f172a',
  primary: '#1d3557',
  primaryDark: '#0b1320',
  primarySoft: '#1b2d42',
  accent: '#d7b96a',
  bubbleSent: '#1f4e6b',
  bubbleReceived: '#2f3d4d',
  textDark: '#f3f4f6',
  textMuted: '#c4ced9',
  textSoft: '#9aa7b6',
  border: '#334155',
  chip: '#1b2431',
  banner: '#2b3a49',
  input: '#111827',
  icon: '#dfe7f0',
  white: '#ffffff',
};

const avatars = {
  ethan: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
};

function App() {
  const [isDark, setIsDark] = useState(false);

  const theme = useMemo(() => (isDark ? darkColors : lightColors), [isDark]);

  const chatTheme = {
    '--page': theme.page,
    '--primary': theme.primary,
    '--primary-dark': theme.primaryDark,
    '--primary-soft': theme.primarySoft,
    '--accent': theme.accent,
    '--bubble-sent': theme.bubbleSent,
    '--bubble-received': theme.bubbleReceived,
    '--text-dark': theme.textDark,
    '--text-muted': theme.textMuted,
    '--text-soft': theme.textSoft,
    '--border': theme.border,
    '--chip': theme.chip,
    '--banner': theme.banner,
    '--input': theme.input,
    '--icon': theme.icon,
    '--white': theme.white,
  };

  const messages = [
    { id: 1, from: 'me', text: 'Hi ETHAN', time: '09:38 PM', status: 'read' },
    { id: 2, from: 'me', text: 'Hello', time: '08:35 PM', status: 'read' },
  ];

  return (
    <div className="app-shell" style={chatTheme}>
      <div className={`phone ${isDark ? 'dark' : 'light'}`}>
        <header className="topbar">
          <div className="status-row">
            <span className="time">4:06</span>
            <div className="status-icons">
              <span className="cell-icon">◔</span>
              <span className="wifi-icon">◍</span>
              <span className="battery">▣</span>
            </div>
          </div>

          <div className="chat-header">
            <button className="icon-button back-button" aria-label="Go back">
              <ArrowLeft size={26} />
            </button>

            <div className="profile-block">
              <div className="avatar-ring">
                <img src={avatars.ethan} alt="Ethan Wright" className="avatar" />
              </div>

              <div className="profile-copy">
                <h1>Ethan Wright</h1>
                <p>Last seen a day ago</p>
              </div>
            </div>

            <div className="header-actions">
              <button className="icon-button" aria-label="Toggle theme" onClick={() => setIsDark((v) => !v)}>
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button className="icon-button" aria-label="More options">
                <MoreVertical size={24} />
              </button>
            </div>
          </div>
        </header>

        <main className="chat-area">
          <div className="privacy-banner">
            <div className="banner-icon-wrap">
              <ShieldCheck size={20} />
            </div>
            <p>
              Messages are end-to-end encrypted. No one outside of this chat, not even United Tribes,
              can read or listen to them. <span>Learn more</span>
            </p>
          </div>

          <div className="date-pill">September 26, 2026</div>

          <div className="message-list">
            {messages.map((msg) => (
              <div key={msg.id} className={`message-row ${msg.from === 'me' ? 'sent' : 'received'}`}>
                <div className="bubble-wrap">
                  <div className="message-bubble">
                    <span>{msg.text}</span>
                  </div>
                  <div className="message-meta">
                    <span>{msg.time}</span>
                    {msg.from === 'me' && <span className="checkmark">✓</span>}
                  </div>
                </div>
              </div>
            ))}

            <div className="message-row received">
              <div className="bubble-wrap">
                <div className="message-bubble secondary">
                  <span>Hello</span>
                </div>
                <div className="message-meta">
                  <span>08:35 PM</span>
                  <span className="checkmark">✓</span>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="composer">
          <div className="composer-icons-left">
            <button className="emoji-button" aria-label="Emoji">
              <Smile size={26} />
            </button>
            <button className="attach-button" aria-label="Attach file">
              <Paperclip size={24} />
            </button>
          </div>

          <div className="input-shell">
            <input type="text" placeholder="Type a message" aria-label="Type a message" />
          </div>

          <button className="voice-button" aria-label="Voice message">
            <Mic size={18} />
          </button>
        </footer>
      </div>
    </div>
  );
}

export default App;
