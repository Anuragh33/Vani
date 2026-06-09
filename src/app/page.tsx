"use client";

import Image from "next/image";
import { useState } from "react";

const DL = "https://github.com/Anuragh33/Vani/releases/download/v0.1.2/Vani-0.1.2.dmg";

const FEATURES = [
  { icon: "🔒", title: "100% On-Device", desc: "Everything runs on your Mac via Apple's SpeechAnalyzer and Foundation Models. Your voice never touches a server." },
  { icon: "⚡", title: "Works Everywhere", desc: "Terminal, Chrome, Safari, Slack, Xcode — anywhere ⌘V works. No app switching." },
  { icon: "✨", title: "AI Polish", desc: "On-device LLM removes filler words, fixes grammar, and matches context — email, code, casual." },
  { icon: "🧠", title: "Context-Aware", desc: "Auto-detects Mail, Xcode, Slack and adjusts polish style. Or pick manually from the menu bar." },
  { icon: "🎙️", title: "Whisper-Class STT", desc: "Powered by macOS 26's SpeechAnalyzer — Whisper-class accuracy, fully offline." },
  { icon: "☁️", title: "iCloud Sync", desc: "Hotkey, context, and custom vocabulary sync silently across all your Macs." },
];

const STEPS = [
  { n: "01", title: "Download the DMG", desc: 'Click the download button and open <code>Vani-0.1.2.dmg</code>.' },
  { n: "02", title: "Drag to Applications", desc: "Drag <strong>Vani.app</strong> into the Applications shortcut inside the DMG." },
  { n: "03", title: "Run install script", desc: 'Double-click <strong>Install Vani.command</strong> in the DMG → click <strong>Open</strong>. Removes the Gatekeeper quarantine flag.' },
  { n: "04", title: "Grant permissions", desc: "Allow <strong>Microphone</strong>, <strong>Speech Recognition</strong>, and <strong>Accessibility</strong> on first launch." },
  { n: "05", title: "Configure Fn key", desc: 'System Settings → Keyboard → set "Press 🌐 key to" → <strong>Do Nothing</strong>.' },
  { n: "06", title: "Start dictating", desc: "Hold <strong>Fn</strong> anywhere, speak, release — polished text appears instantly." },
];

function Waveform() {
  const bars = [
    { h: 30, cls: "b1" }, { h: 55, cls: "b2" }, { h: 78, cls: "b3" },
    { h: 92, cls: "b4" }, { h: 100, cls: "b5" }, { h: 85, cls: "b6" },
    { h: 95, cls: "b7" }, { h: 78, cls: "b1" }, { h: 62, cls: "b2" },
    { h: 44, cls: "b3" }, { h: 68, cls: "b4" }, { h: 88, cls: "b5" },
    { h: 70, cls: "b6" }, { h: 48, cls: "b7" }, { h: 32, cls: "b1" },
  ];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 3, height: 40 }}>
      {bars.map((b, i) => (
        <div key={i} className={`bar ${b.cls}`} style={{
          width: 3, height: `${b.h}%`, borderRadius: 999,
          background: "linear-gradient(to top, #e8326e, #c084fc)",
        }} />
      ))}
    </div>
  );
}

function DownloadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  );
}

export default function Page() {
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText("xattr -dr com.apple.quarantine /Applications/Vani.app");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <main style={{ background: "#08041a", minHeight: "100vh", overflowX: "hidden" }}>

      {/* ── NAV ── */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "14px 32px",
        background: "rgba(8,4,26,0.8)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Image src="/app-icon.png" alt="Vani" width={30} height={30} style={{ borderRadius: 8 }} />
          <span style={{ fontWeight: 600, fontSize: 17 }}>Vani</span>
        </div>

        <nav style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {["Features", "Install", "Requirements"].map(s => (
            <a key={s} href={`#${s.toLowerCase()}`} style={{
              color: "rgba(240,234,248,0.55)", fontSize: 14, textDecoration: "none",
              transition: "color 0.15s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "#f0eaf8")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,234,248,0.55)")}
            >{s}</a>
          ))}
        </nav>

        <a href={DL} className="btn-primary" style={{ padding: "9px 22px", fontSize: 14 }}>
          Download
        </a>
      </header>

      {/* ── HERO ── */}
      <section style={{ position: "relative", padding: "160px 24px 100px", textAlign: "center", overflow: "hidden" }}>
        {/* blobs */}
        <div style={{ position: "absolute", top: "20%", left: "15%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,47,224,0.18) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "20%", right: "15%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,50,110,0.15) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

        <div style={{ position: "relative", maxWidth: 720, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>

          <div className="float">
            <Image src="/app-icon.png" alt="Vani" width={96} height={96}
              style={{ borderRadius: 22, boxShadow: "0 0 40px rgba(124,47,224,0.4)" }} />
          </div>

          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 16px", borderRadius: 999, fontSize: 13,
            background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
            color: "rgba(240,234,248,0.6)",
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", display: "inline-block", animation: "glow-pulse 2s ease-in-out infinite" }} />
            macOS 26 · Apple Silicon · 100% On-device
          </div>

          <h1 style={{ fontSize: "clamp(48px, 8vw, 80px)", fontWeight: 700, lineHeight: 1.1, margin: 0 }}>
            <span className="shimmer">Hold Fn.</span>
            <br />
            <span style={{ color: "#f0eaf8" }}>Speak. Done.</span>
          </h1>

          <p style={{ fontSize: "clamp(16px, 2.5vw, 20px)", color: "rgba(240,234,248,0.55)", maxWidth: 560, lineHeight: 1.7, margin: 0 }}>
            Privacy-first voice dictation for macOS. Speak naturally, get polished text instantly in any app. Zero servers. Zero API costs. Everything runs on your Mac.
          </p>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <a href={DL} className="btn-primary">
              <DownloadIcon />
              Download Vani 0.1.2
            </a>
            <span style={{ fontSize: 13, color: "rgba(240,234,248,0.4)" }}>
              Free · macOS 26+ · Apple Silicon · 1.6 MB
            </span>
          </div>

          {/* pill demo */}
          <div style={{ marginTop: 16 }}>
            <p style={{ fontSize: 12, color: "rgba(240,234,248,0.35)", marginBottom: 10 }}>
              The recording pill — appears while you speak
            </p>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 12,
              padding: "10px 18px", borderRadius: 999,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(124,47,224,0.35)",
              backdropFilter: "blur(12px)",
            }}>
              <Waveform />
              <Image src="/app-icon.png" alt="" width={20} height={20} style={{ borderRadius: 5 }} />
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── FEATURES ── */}
      <section id="features" className="section">
        <div className="section-inner">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 className="section-title">Everything on your device</h2>
            <p className="section-sub">No cloud. No subscriptions. No privacy trade-offs.</p>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
          }}>
            {FEATURES.map(f => (
              <div key={f.title} className="card" style={{ padding: "28px 28px" }}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{f.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 8, color: "#f0eaf8" }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: "rgba(240,234,248,0.55)", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── HOW IT WORKS ── */}
      <section className="section" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="section-inner" style={{ textAlign: "center" }}>
          <h2 className="section-title">How it works</h2>
          <p className="section-sub" style={{ marginBottom: 56 }}>Four steps. All on your chip.</p>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}>
            {["Hold Fn", "Mic records", "AI transcribes", "Text injected"].map((step, i) => (
              <div key={step} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: "50%",
                    background: "linear-gradient(135deg, #7c2fe0, #e8326e)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 700, fontSize: 18, color: "white",
                  }}>{i + 1}</div>
                  <span style={{ fontSize: 14, fontWeight: 500, color: "#f0eaf8", whiteSpace: "nowrap" }}>{step}</span>
                </div>
                {i < 3 && (
                  <div style={{ width: 40, height: 1, background: "rgba(255,255,255,0.15)", margin: "0 4px", marginBottom: 22 }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── INSTALL ── */}
      <section id="install" className="section">
        <div className="section-inner">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 className="section-title">Get started</h2>
            <p className="section-sub">Takes about 2 minutes.</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 760, margin: "0 auto" }}>
            {STEPS.map(s => (
              <div key={s.n} className="card" style={{ padding: "22px 28px", display: "flex", gap: 20, alignItems: "flex-start" }}>
                <span style={{
                  fontSize: 20, fontWeight: 800, lineHeight: 1.5,
                  background: "linear-gradient(135deg, #c084fc, #e8326e)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  backgroundClip: "text", flexShrink: 0, width: 32,
                }}>{s.n}</span>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 600, margin: "0 0 5px", color: "#f0eaf8" }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: "rgba(240,234,248,0.55)", lineHeight: 1.7, margin: 0 }}
                    dangerouslySetInnerHTML={{ __html: s.desc.replace(/<code>/g, '<code style="background:rgba(255,255,255,0.1);padding:1px 6px;border-radius:4px;font-size:12px;font-family:monospace">').replace(/<\/code>/g, "</code>") }} />
                </div>
              </div>
            ))}
          </div>

          {/* terminal box */}
          <div className="card" style={{ maxWidth: 760, margin: "20px auto 0", padding: "20px 24px" }}>
            <p style={{ fontSize: 13, color: "rgba(240,234,248,0.45)", marginBottom: 12 }}>
              Or fix Gatekeeper manually — paste in Terminal:
            </p>
            <div style={{
              display: "flex", alignItems: "center", gap: 12,
              background: "rgba(0,0,0,0.5)", borderRadius: 10, padding: "12px 16px",
            }}>
              <code style={{ flex: 1, fontSize: 13, color: "#4ade80", fontFamily: "monospace", wordBreak: "break-all" }}>
                xattr -dr com.apple.quarantine /Applications/Vani.app
              </code>
              <button onClick={copy} style={{
                flexShrink: 0, padding: "5px 14px", borderRadius: 8, border: "none",
                cursor: "pointer", fontSize: 12, fontWeight: 500,
                background: copied ? "rgba(74,222,128,0.2)" : "rgba(255,255,255,0.08)",
                color: copied ? "#4ade80" : "rgba(240,234,248,0.6)",
                transition: "all 0.15s",
              }}>
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── REQUIREMENTS ── */}
      <section id="requirements" className="section" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="section-inner">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 className="section-title">Requirements</h2>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20, maxWidth: 800, margin: "0 auto",
          }}>
            {[
              { label: "macOS", value: "26 (Tahoe) or later", icon: "🖥️" },
              { label: "Chip", value: "Apple Silicon (M-series)", icon: "⚡" },
              { label: "Price", value: "Free forever", icon: "🎁" },
            ].map(r => (
              <div key={r.label} className="card" style={{ padding: "36px 24px", textAlign: "center" }}>
                <div style={{ fontSize: 42, marginBottom: 16 }}>{r.icon}</div>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(240,234,248,0.4)", marginBottom: 8 }}>{r.label}</div>
                <div style={{ fontSize: 16, fontWeight: 600, color: "#f0eaf8" }}>{r.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── PRIVACY ── */}
      <section className="section">
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div className="card" style={{ padding: "56px 48px", textAlign: "center" }}>
            <div style={{ fontSize: 52, marginBottom: 20 }}>🔒</div>
            <h2 style={{ fontSize: 30, fontWeight: 700, marginBottom: 16, color: "#f0eaf8" }}>Privacy first, always</h2>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(240,234,248,0.55)", margin: 0 }}>
              Vani has no servers, no analytics, no accounts. Your voice is processed entirely on your Mac using Apple&apos;s on-device AI. Nothing is stored to disk. History clears on quit.
            </p>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── CTA ── */}
      <section className="section" style={{ textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, color: "#f0eaf8", margin: 0 }}>
            Ready to dictate?
          </h2>
          <p style={{ fontSize: 17, color: "rgba(240,234,248,0.5)", margin: 0 }}>
            Download Vani and hold Fn to speak in any app.
          </p>
          <a href={DL} className="btn-primary" style={{ fontSize: 17, padding: "16px 40px" }}>
            <DownloadIcon />
            Download for macOS — Free
          </a>
          <span style={{ fontSize: 13, color: "rgba(240,234,248,0.35)" }}>macOS 26 · Apple Silicon · 1.6 MB</span>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding: "32px 24px",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        maxWidth: 1100,
        margin: "0 auto",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Image src="/app-icon.png" alt="Vani" width={24} height={24} style={{ borderRadius: 6 }} />
          <span style={{ fontSize: 14, fontWeight: 600 }}>Vani</span>
        </div>
        <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
          {[
            { label: "Download v0.1.2", href: DL },
            { label: "All Releases", href: "https://github.com/Anuragh33/Vani/releases" },
            { label: "GitHub", href: "https://github.com/Anuragh33" },
          ].map(l => (
            <a key={l.label} href={l.href} style={{
              fontSize: 13, color: "rgba(240,234,248,0.45)", textDecoration: "none",
              transition: "color 0.15s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "#f0eaf8")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,234,248,0.45)")}
            >{l.label}</a>
          ))}
        </div>
        <span style={{ fontSize: 13, color: "rgba(240,234,248,0.35)" }}>
          Made by <a href="https://github.com/Anuragh33" style={{ color: "rgba(240,234,248,0.55)", textDecoration: "none" }}>Anurag</a>
        </span>
      </footer>

    </main>
  );
}
