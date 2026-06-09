"use client";

import Image from "next/image";
import { useState } from "react";

const DOWNLOAD_URL =
  "https://github.com/Anuragh33/vani-releases/releases/download/v0.1.2/Vani-0.1.2.dmg";

const FEATURES = [
  {
    icon: "🔒",
    title: "100% On-Device",
    desc: "Everything runs locally using Apple's SpeechAnalyzer and Foundation Models. Your voice never leaves your Mac.",
  },
  {
    icon: "⚡",
    title: "Instant Injection",
    desc: "Works in Terminal, Chrome, Safari, Slack, Xcode — anywhere ⌘V works. No app switching needed.",
  },
  {
    icon: "✨",
    title: "AI Polish",
    desc: "Apple's on-device LLM removes filler words, fixes grammar, and matches your tone — email, code, casual chat.",
  },
  {
    icon: "🧠",
    title: "Context-Aware",
    desc: "Automatically detects Mail, Xcode, Slack, and adjusts the polish style to fit. Or pick manually.",
  },
  {
    icon: "🎙️",
    title: "Whisper-Class Accuracy",
    desc: "Powered by macOS 26's SpeechAnalyzer — the same engine behind Apple's system dictation.",
  },
  {
    icon: "☁️",
    title: "iCloud Sync",
    desc: "Hotkey, context, and vocabulary preferences sync silently across all your Macs.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Download the DMG",
    desc: 'Click the download button and open the <code style="background:rgba(255,255,255,0.1);padding:1px 5px;border-radius:4px;font-size:12px">Vani-0.1.2.dmg</code> file.',
  },
  {
    n: "02",
    title: "Drag to Applications",
    desc: "Drag <strong>Vani.app</strong> into the Applications shortcut inside the DMG window.",
  },
  {
    n: "03",
    title: "Run the install script",
    desc: 'Double-click <strong>Install Vani.command</strong> inside the DMG and click <strong>Open</strong>. This removes a Gatekeeper flag — it runs: <code style="background:rgba(255,255,255,0.1);padding:1px 5px;border-radius:4px;font-size:12px">xattr -dr com.apple.quarantine /Applications/Vani.app</code>',
  },
  {
    n: "04",
    title: "Grant permissions",
    desc: "On first launch grant <strong>Microphone</strong>, <strong>Speech Recognition</strong>, and <strong>Accessibility</strong>. All three are required.",
  },
  {
    n: "05",
    title: "Set Fn key",
    desc: 'Go to <strong>System Settings → Keyboard</strong> and set "Press 🌐 key to" → <strong>Do Nothing</strong> so macOS doesn\'t intercept Fn before Vani does.',
  },
  {
    n: "06",
    title: "Start dictating",
    desc: "Vani lives in your <strong>menu bar</strong>. Hold <strong>Fn</strong> anywhere, speak naturally, release — polished text appears instantly in the focused app.",
  },
];

function WaveformBars() {
  const heights = [30, 55, 75, 90, 100, 85, 95, 80, 65, 45, 70, 88, 72, 50, 35];
  const classes = ["bar-1","bar-2","bar-3","bar-4","bar-5","bar-6","bar-7","bar-1","bar-2","bar-3","bar-4","bar-5","bar-6","bar-7","bar-1"];
  return (
    <div className="flex items-center gap-[3px] h-14">
      {heights.map((h, i) => (
        <div
          key={i}
          className={classes[i]}
          style={{
            width: 4,
            height: `${h}%`,
            borderRadius: 999,
            background: "linear-gradient(to top, #e8326e, #c084fc)",
            opacity: 0.85,
          }}
        />
      ))}
    </div>
  );
}

function Pill() {
  return (
    <div
      className="inline-flex items-center gap-3 px-5 py-3 rounded-full"
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(124,47,224,0.4)",
        backdropFilter: "blur(12px)",
      }}
    >
      <WaveformBars />
      <Image src="/app-icon.png" alt="app" width={22} height={22} className="rounded-md" />
    </div>
  );
}

export default function Home() {
  const [copied, setCopied] = useState(false);

  function copyCmd() {
    navigator.clipboard.writeText("xattr -dr com.apple.quarantine /Applications/Vani.app");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ background: "rgba(10,6,20,0.75)", backdropFilter: "blur(16px)", borderBottom: "1px solid var(--border)" }}>
        <div className="flex items-center gap-2">
          <Image src="/app-icon.png" alt="Vani" width={28} height={28} className="rounded-lg" />
          <span className="font-semibold text-base" style={{ color: "var(--text)" }}>Vani</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: "var(--muted)" }}>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#install" className="hover:text-white transition-colors">Install</a>
          <a href="#requirements" className="hover:text-white transition-colors">Requirements</a>
        </div>
        <a href={DOWNLOAD_URL}
          className="px-4 py-2 rounded-full text-sm font-medium text-white transition-all hover:scale-105"
          style={{ background: "linear-gradient(135deg, #7c2fe0, #e8326e)" }}>
          Download
        </a>
      </nav>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-40 pb-32 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(124,47,224,0.22) 0%, transparent 70%)", filter: "blur(40px)" }} />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(232,50,110,0.18) 0%, transparent 70%)", filter: "blur(40px)" }} />

        <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl mx-auto">
          <div className="float">
            <Image src="/app-icon.png" alt="Vani" width={100} height={100} className="rounded-[24px] glow-purple" />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium glass"
            style={{ color: "var(--muted)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" style={{ animation: "pulse-glow 2s ease-in-out infinite" }} />
            macOS 26 · Apple Silicon · On-device AI
          </div>

          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-none">
            <span className="shimmer-text">Hold Fn.</span>
            <br />
            <span style={{ color: "var(--text)" }}>Speak. Done.</span>
          </h1>

          <p className="text-lg md:text-xl max-w-xl leading-relaxed" style={{ color: "var(--muted)" }}>
            Privacy-first voice dictation for macOS. Speak naturally, get polished text instantly in any app. Zero servers. Zero API costs.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <a href={DOWNLOAD_URL}
              className="flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-base text-white transition-all hover:scale-105 hover:brightness-110 glow-purple"
              style={{ background: "linear-gradient(135deg, #7c2fe0, #e8326e)" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Vani 0.1.2
            </a>
            <span className="text-sm" style={{ color: "var(--muted)" }}>Free · macOS 26+ · 1.6 MB</span>
          </div>

          <div className="mt-6">
            <p className="text-xs mb-3" style={{ color: "var(--muted)" }}>The recording pill — appears while you speak</p>
            <Pill />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="px-6 py-24 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--text)" }}>Everything on your device</h2>
          <p className="text-lg" style={{ color: "var(--muted)" }}>No cloud. No subscriptions. No privacy trade-offs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f) => (
            <div key={f.title} className="glass gradient-border rounded-2xl p-6 flex flex-col gap-3 transition-all hover:-translate-y-1"
              style={{ cursor: "default" }}>
              <span className="text-3xl">{f.icon}</span>
              <h3 className="text-lg font-semibold" style={{ color: "var(--text)" }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-24" style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--text)" }}>How it works</h2>
          <p className="text-lg mb-14" style={{ color: "var(--muted)" }}>Four steps. All on your chip.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-2">
            {["Hold Fn","Mic records","AI transcribes","Text injected"].map((step, i) => (
              <div key={step} className="flex items-center gap-4 md:gap-2">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-base font-bold text-white"
                    style={{ background: "linear-gradient(135deg, #7c2fe0, #e8326e)" }}>
                    {i + 1}
                  </div>
                  <span className="text-sm font-medium" style={{ color: "var(--text)" }}>{step}</span>
                </div>
                {i < 3 && <div className="hidden md:block w-12 h-px mx-2" style={{ background: "var(--border)" }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTALL */}
      <section id="install" className="px-6 py-24 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--text)" }}>Get started</h2>
          <p className="text-lg" style={{ color: "var(--muted)" }}>Takes about 2 minutes.</p>
        </div>
        <div className="flex flex-col gap-4">
          {STEPS.map((s) => (
            <div key={s.n} className="glass gradient-border rounded-2xl p-6 flex gap-5 items-start">
              <span className="text-xl font-bold shrink-0 shimmer-text" style={{ lineHeight: 1.5 }}>{s.n}</span>
              <div>
                <h3 className="font-semibold text-base mb-1" style={{ color: "var(--text)" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}
                  dangerouslySetInnerHTML={{ __html: s.desc }} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 glass gradient-border rounded-2xl p-5">
          <p className="text-sm mb-3" style={{ color: "var(--muted)" }}>Or fix Gatekeeper manually — paste in Terminal:</p>
          <div className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: "rgba(0,0,0,0.5)" }}>
            <code className="flex-1 text-sm text-green-400 select-all break-all">
              xattr -dr com.apple.quarantine /Applications/Vani.app
            </code>
            <button onClick={copyCmd}
              className="shrink-0 px-3 py-1 rounded-lg text-xs font-medium transition-all hover:scale-105"
              style={{ background: copied ? "rgba(74,222,128,0.2)" : "rgba(255,255,255,0.08)", color: copied ? "#4ade80" : "var(--muted)" }}>
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section id="requirements" className="px-6 py-24" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{ color: "var(--text)" }}>Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { label: "macOS", value: "26 (Tahoe) or later", icon: "🍎" },
              { label: "Chip", value: "Apple Silicon (M-series)", icon: "⚡" },
              { label: "Price", value: "Free forever", icon: "🎁" },
            ].map((r) => (
              <div key={r.label} className="glass gradient-border rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">{r.icon}</div>
                <div className="text-xs font-medium mb-2 uppercase tracking-wider" style={{ color: "var(--muted)" }}>{r.label}</div>
                <div className="font-semibold" style={{ color: "var(--text)" }}>{r.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIVACY */}
      <section className="px-6 py-24 max-w-3xl mx-auto text-center">
        <div className="glass gradient-border rounded-3xl p-12 flex flex-col items-center gap-5">
          <div className="text-6xl">🔒</div>
          <h2 className="text-3xl font-bold" style={{ color: "var(--text)" }}>Privacy first, always</h2>
          <p className="leading-relaxed text-lg" style={{ color: "var(--muted)" }}>
            Vani has no servers, no analytics, no user accounts. Your voice is processed entirely on your Mac using Apple&apos;s on-device AI. Nothing is stored to disk. History clears when you quit.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: "var(--text)" }}>Ready to dictate?</h2>
          <p style={{ color: "var(--muted)" }}>Download Vani and hold Fn to speak in any app.</p>
          <a href={DOWNLOAD_URL}
            className="flex items-center gap-3 px-10 py-4 rounded-full font-semibold text-lg text-white transition-all hover:scale-105 hover:brightness-110 glow-pink"
            style={{ background: "linear-gradient(135deg, #7c2fe0, #e8326e)" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download for macOS — Free
          </a>
          <p className="text-xs" style={{ color: "var(--muted)" }}>macOS 26 · Apple Silicon · 1.6 MB</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-8 text-center text-sm" style={{ borderTop: "1px solid var(--border)", color: "var(--muted)" }}>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <span>Made by <a href="https://github.com/Anuragh33" className="hover:text-white transition-colors">Anurag</a></span>
          <span className="hidden md:inline">·</span>
          <a href={DOWNLOAD_URL} className="hover:text-white transition-colors">Download v0.1.2</a>
          <span className="hidden md:inline">·</span>
          <a href="https://github.com/Anuragh33/vani-releases/releases" className="hover:text-white transition-colors">All Releases</a>
        </div>
      </footer>

    </main>
  );
}
