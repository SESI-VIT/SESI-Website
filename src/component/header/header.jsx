import React from "react";
import { useNavigate } from "react-router-dom";


// Header-only CSS (keeps the header exactly as before)
const globalStyles = `
:root {
  --bg: #050816;
  --accent: #ffb347;
  --accent-strong: #ff8c00;
  --text-main: #f9fafb;
  --text-muted: #a1a5b5;
  --nav-height: 70px;
}
*{box-sizing:border-box;margin:0;padding:0}
html, body {
  min-height: 100%;
}

#root {
  min-height: 100%;
}

body{font-family:system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial; background:var(--bg); color:var(--text-main);overflow-x:hidden;scroll-behavior:smooth}
header{header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  background: #050816;   /* <-- THIS PREVENTS TRANSPARENCY ISSUES */
  z-index: 9999;         /* <-- keep it above all content */
  pointer-events: none;
}
}
.nav-inner{pointer-events:auto;width:min(1120px,100%);padding:0 1.5rem;display:flex;align-items:center;justify-content:space-between}
.logo{display:flex;align-items:center;gap:.75rem;cursor:pointer;border:none;background:transparent;padding:0}
.logo-mark{width:38px;height:38px;border-radius:999px;border:1px solid rgba(255,179,71,0.5);display:grid;place-items:center;background:radial-gradient(circle at 30% 10%,rgba(255,255,255,0.24) 0,transparent 55%),radial-gradient(circle at 70%90%,rgba(255,140,0,0.9) 0,transparent 70%);box-shadow:0 0 18px rgba(255,179,71,0.65);font-size:.8rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:#1f2937}
.logo-text-main{font-weight:650;letter-spacing:.08em;font-size:.78rem;text-transform:uppercase;color:white;padding-bottom:6px;}
.logo-text-sub{font-size:.68rem;color:var(--text-muted)}
.sesi-root1{position:relative;scroll-behavior:smooth;}
nav ul{display:flex;list-style:none;gap:1.2rem;font-size:.82rem;background:#101726;padding:.7rem 1.2rem;border-radius:50px;border:2px solid #1d253a;box-shadow:inset 0 3px 8px rgba(0,0,0,0.5),0 4px 10px rgba(0,0,0,0.4);position:relative}
.nav-slider{display:none !important;} 
.nav-popover{display:none !important;}
.nav-popover-list{display:flex;flex-direction:column;gap:6px;padding:8px}
.nav-popover-item{padding:8px 12px;border-radius:10px;cursor:pointer;color:var(--text-main);background:transparent;transition:background .18s ease,transform .15s ease}
.nav-popover-item:hover{background:linear-gradient(90deg, rgba(255,179,71,0.08), rgba(255,140,0,0.06));transform:translateX(6px)}
.nav-popover-pointer{position:absolute;top:-8px;left:50%;transform:translateX(-50%);width:18px;height:18px;background:var(--accent);border-radius:6px;filter:blur(8px);opacity:.14}

nav button{background:transparent;border:none;cursor:pointer;color:var(--text-muted);position:relative;padding:0.5rem 0.9rem;font-size:.88rem;border-radius:10px;transition:color .22s ease,transform .18s ease}
nav button:hover{color:var(--text-main);transform:translateY(-2px) scale(1.01)}
.nav-icon{width:22px;height:22px;flex:0 0 22px;color:var(--text-main);filter:none;transition:transform .12s ease,filter .12s ease}
nav ul li button{width:46px;height:46px;padding:0;border-radius:50%;background:#0d1224;border:2px solid #1a2238;display:flex;align-items:center;justify-content:center;box-shadow:inset 0 3px 7px rgba(0,0,0,0.6),0 3px 6px rgba(0,0,0,0.4);transition:transform .15s ease, box-shadow .2s ease;}
nav ul li button:hover{transform:translateY(-4px);box-shadow:0 0 18px rgba(255,230,120,0.45), inset 0 3px 7px rgba(0,0,0,0.6);}

/* hover-card (small card under the button) */
nav ul li button::after{content:attr(data-key);position:absolute;top:calc(100% + 10px);left:50%;transform:translateX(-50%) translateY(6px);background:rgba(7,11,31,0.98);color:var(--text-main);padding:8px 10px;border-radius:10px;font-size:.82rem;font-weight:700;opacity:0;pointer-events:none;transition:opacity .18s ease,transform .18s ease;box-shadow:0 18px 40px rgba(2,6,23,0.6);border:1px solid rgba(255,255,255,0.04);white-space:nowrap}
nav ul li button:hover::after, nav ul li button:focus::after{opacity:1;transform:translateX(-50%) translateY(0);pointer-events:auto}

@media (max-width:720px){nav ul li button::after{display:none}; .nav-popover{display:none}; .nav-slider{display:none}}
`;

const HeaderOnly = () => {
    const navigate = useNavigate();

    const goTo = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <div className="sesi-root1">
            <style>{globalStyles}</style>

            <header>
                <div className="nav-inner">

                    {/* LOGO (GOES TO HOME) */}
                    <button
                        className="logo"
                        onClick={() => goTo("/")}
                        aria-label="Go to Home"
                    >
                        <div
                            className="logo-mark"
                            style={{
                                backgroundImage:
                                    "url('https://thin-white-zy73eddcqg-n6rhp6r92v.edgeone.app/sesi.jpeg')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        />
                        <div>
                            <div className="logo-text-main">
                                Solar Energy Society of India
                            </div>
                            <div className="logo-text-sub">VIT Student Chapter</div>
                        </div>
                    </button>

                    {/* NAVIGATION */}
                    <nav>
                        <ul>
                            <li><button data-key="Home" onClick={() => goTo("/")}>
                                <svg className="nav-icon" viewBox="0 0 24 24">
                                    <path fill="#ffffff" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                                </svg>
                            </button></li>

                            <li><button data-key="Events" onClick={() => goTo("/events")}>
                                <svg className="nav-icon" viewBox="0 0 24 24">
                                    <path fill="#ffffff" d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
                                </svg>
                            </button></li>

                            <li><button data-key="Blogs" onClick={() => goTo("/blogs")}>
                                <svg className="nav-icon" viewBox="0 0 24 24">
                                    <path fill="#ffffff" d="M4 4h14v2H4zm0 4h10v2H4zm0 4h14v2H4zm0 4h10v2H4z" />
                                </svg>
                            </button></li>

                            <li><button data-key="Achievements" onClick={() => goTo("/achievements")}>
                                <svg className="nav-icon" viewBox="0 0 24 24">
                                    <path fill="#ffffff" d="M12 2l3 7h7l-5.5 4.5L18 21l-6-3.5L6 21l1.5-7.5L2 9h7z" />
                                </svg>
                            </button></li>

                            <li><button data-key="Board" onClick={() => goTo("/board")}>
                                <svg className="nav-icon" viewBox="0 0 24 24">
                                    <path fill="#ffffff" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-3.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V20h6v-3.5c0-2.33-4.67-3.5-7-3.5z" />
                                </svg>
                            </button></li>

                            <li><button data-key="Gallery" onClick={() => goTo("/gallery")}>
                                <svg className="nav-icon" viewBox="0 0 24 24">
                                    <path fill="#ffffff" d="M21 19V5H3v14h18zM8 11l3 4 4-5 5 6H6z" />
                                </svg>
                            </button></li>

                            <li>
                                <button
                                    data-key="Contact"
                                    aria-label="Contact Us"
                                    onClick={() => {
                                        const footer = document.getElementById("contact");
                                        if (footer) footer.scrollIntoView({ behavior: "smooth" });
                                    }}
                                >
                                    <svg className="nav-icon" viewBox="0 0 24 24" width="20" height="20">
                                        <path fill="#ffffff" d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8l-4 3v-3H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                                    </svg>
                                </button>

                            </li>
                        </ul>
                    </nav>

                </div>
            </header>
        </div>
    );
};



export default HeaderOnly;