import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';

const boardMembers = [
  { name: 'Kowsik N', position: 'CHAIRPERSON', image: 'https://peculiar-olive-1k6t9d42jm.edgeone.app/ae2f56d5-55f9-4af0-93f5-97c45e51706a.jpg', bio: 'Work or fun, I lead it all, stand strong, never let us fall.With laughter and light, I set the tone, turning every idea into our own.', linkedin: 'https://www.linkedin.com/in/kowsik-n-5146882b8' },
  { name: 'Aditi Shrija', position: 'VICE-CHAIRPERSON', image: 'https://intact-plum-pzbafquw1t.edgeone.app/1d12b83b-2ec2-44d1-a860-bf759cdd2155.jpg', bio: 'I’m the Vice Chairperson, committed to serving with responsibility, helping my chapter grow, and being there for everyone more as a friend than just a leader.', linkedin: 'https://www.linkedin.com/in/aditi-shrija-959b1228a' },
  { name: 'Atchaya S', position: 'SECRETARY', image: 'https://difficult-olive-kqzrpkrurm.edgeone.app/e6de9b06-54b1-4b2e-81d2-9de3e9afadb1.jpg', bio: 'The planner behind the progress - I manage the chapters records, handle communication and support the team in every event and activity.', linkedin: 'https://www.linkedin.com/in/atchaya22' },
  { name: 'Sharma AK', position: 'CO-SECRETARY', image: 'https://vitreous-tomato-oj95swdjga.edgeone.app/cae18e54-3269-40c7-93c3-3a2d2f36ac89.jpg', bio: 'Precision, intelligence, and a calm drive is the quiet force behind flawless coordination.', linkedin: 'https://www.linkedin.com/in/sharma-a-k-b3597428a' },
  { name: 'Rajita S K', position: 'FINANCE HEAD', image: 'https://tiny-gold-spkr9j074z.edgeone.app/dda099a6-1e49-44a6-89f0-75887af8cd78.jpg', bio: 'As the Finance Head, I make sure the numbers add up while keeping the vibes laid back. Work smart, stay chill!', linkedin: 'https://www.linkedin.com/in/rajita-s-k-56803728b' },
  { name: 'Vijayadharshan P', position: 'DESIGN HEAD', image: 'https://detailed-magenta-jhvzfrn3wj.edgeone.app/f6e90eb4-a32d-4cbd-be85-8ee203406079.jpg', bio: 'Spot a poster that’s effortlessly cool or a design that just feels right? That’s magic at work crafting visuals that make SESI stand out in style.', linkedin: 'https://www.linkedin.com/in/vijayadharshan-p-a2a93a279' },
  { name: 'Mugundan DS', position: 'EDITORIAL HEAD', image: 'https://quiet-amaranth-t3jkielhsb.edgeone.app/b80d894d-5057-4599-adb5-a62073e6f1ab.png', bio: 'Dedicated to bringing narratives that mix technology and creativity, inspiring readers to envision and drive a sustainable, renewable energy future. I believe every story has the power to fuel change.', linkedin: 'https://www.linkedin.com/in/d-s-mugundan-7462a828a' },
  { name: 'Poshika Reddy', position: 'MANAGEMENT HEAD', image: 'https://yielding-tomato-al0wcycbih.edgeone.app/6408cd2c-c07b-4ab5-b2fd-90ed39d7524a.jpg', bio: 'My job? To handle the behind-the-scenes stuff and remove the headaches, making sure every event runs completely chaos-free.', linkedin: 'https://www.linkedin.com/in/poshika-reddy' },
  { name: 'Anjana Nair', position: 'EVENTS HEAD', image: 'https://shy-rose-wqebpujrqo.edgeone.app/anjana%20akka.jpeg', bio: 'From concept to execution, our Event Head brings energy, precision, and imagination to every event, making each one truly remarkable', linkedin: 'https://www.linkedin.com/in/anjana-nair-491589207' },
  { name: 'Vignesh V', position: 'TECHNICAL HEAD', image: 'https://satisfied-amber-sv7gmq6cbj.edgeone.app/8e845607-d9f2-4a04-b54d-1dfe81cbd65e.jpg', bio: 'Where creativity meets code, you’ll find our effortlessly cool Technical Head turning ideas into impact.', linkedin: 'https://www.linkedin.com/in/vignesh-v06' }
];

const facultyCoordinators = [
  { name: 'Dr.Debashish Dash', grade: 'Associate Professor Grade 1', department: 'School of Electronics Engineering (SENSE)', image: 'https://civic-aqua-yltwmfx5yu.edgeone.app/Screenshot%202025-10-24%20075254.png' },
  { name: 'Dr. Aruna Kumar Behura', grade: 'Associate Professor Grade 2', department: 'School of Mechanical Engineering (SMEC)', image: 'https://economic-chocolate-bq32osctbk.edgeone.app/Screenshot%202025-10-24%20072810.png' }
];

function SesiBoardPage() {
  const [activeMember, setActiveMember] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [rotationSpeed] = useState(0.1);
  const [isPaused, setIsPaused] = useState(false);
  const [reset, setReset] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const orbitRadius = 320;

  // ref to hold temporary hover timer so moving between orbit and center won't hide immediately
  const hoverTimerRef = useRef(null);
  const hoveredMemberRef = useRef(null);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      body { margin: 0; overflow-y: auto; background: radial-gradient(circle at center, #000, #000); }
      .solar-bg {
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: url('https://www.transparenttextures.com/patterns/stardust.png');
        background-size: cover; z-index: 0;
      }
      canvas#twinkle-stars {
        position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; pointer-events: none;
      }
      .board-page { position: relative; min-height: 120vh; color: #fff; display:flex; flex-direction:column; align-items:center; justify-content:center; overflow:hidden; z-index: 2; }
      .center-logo { position: relative; display:flex; flex-direction:column; align-items:center; justify-content:center; border-radius:50%; background:transparent; padding:2.5rem; z-index:10; }
      .sesi-logo { width:200px; height:200px; border-radius:50%; object-fit:cover; border:5px solid #FFD700; box-shadow:0 0 180px rgba(255, 223, 0, 1); opacity: 0; transform: scale(0.8); transition: opacity 1.2s ease, transform 1.2s ease; }
      .sesi-logo.show { opacity: 1; transform: scale(1); }
      .active-member { text-align:center; width:28rem; margin-top:0.5rem; background:#000; border:1.5px solid rgba(255,215,0,0.7); border-radius:1.5rem; padding:2rem; box-shadow:0 0 40px rgba(255,215,0,0.6); position: relative; z-index: 20; transition: all 0.35s ease-in-out; }
      .orbit-member { position:absolute; display:flex; flex-direction:column; align-items:center; cursor:pointer; opacity:0; transform: scale(0.8); transition: opacity 0.35s ease, transform 0.35s ease; }
      .orbit-member.show { opacity: 1; transform: scale(1.1); }
      .orbit-member.fade { opacity:0.3; filter:blur(2px); }
      .orbit-member.hidden { opacity:0; pointer-events:none; }
      .orbit-ring { position:absolute; border-radius:50%; border:1.5px solid rgba(255,215,0,0.55); opacity:0.55; pointer-events:none; z-index:1; }
      .ring1 { width:720px; height:720px; }
      .ring2 { width:520px; height:520px; }
      .orbit-member h3, .orbit-member p { white-space: nowrap; overflow: visible; text-shadow: 0 0 6px rgba(0,0,0,0.9); }
      .faculty-section { width:100%; padding:4rem 2rem; text-align:center; background:#000; color:#FFD700; z-index: 2; }
      .faculty-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:2rem; justify-items:center; margin-top:2rem; }
      /* faculty cards are fully opaque black now */
      .faculty-card { background:#000; border:1.5px solid rgba(255,215,0,0.7); border-radius:1.5rem; padding:2rem; width:300px; box-shadow:0 0 40px rgba(255,215,0,0.6); color:white; display:flex; flex-direction:column; align-items:center; }
      .faculty-photo { width:120px; height:120px; border-radius:50%; border:2px solid gold; object-fit:cover; margin-bottom:1rem; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // Twinkling stars effect (keeps stars spread and glowing across whole page)
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.id = 'twinkle-stars';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();

    const stars = Array.from({ length: 500 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.8 + 0.2,
      alpha: Math.random() * 0.9 + 0.1,
      delta: (Math.random() * 0.02 + 0.002) * (Math.random() > 0.5 ? 1 : -1)
    }));

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        s.alpha += s.delta;
        if (s.alpha <= 0.05) { s.alpha = 0.05; s.delta = Math.abs(s.delta); }
        if (s.alpha >= 1) { s.alpha = 1; s.delta = -Math.abs(s.delta); }
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
        ctx.shadowBlur = 6 + s.r * 3;
        ctx.shadowColor = 'rgba(255,240,200,0.9)';
        ctx.fill();
      });
      requestAnimationFrame(draw);
    }

    draw();
    window.addEventListener('resize', resize);
    return () => {
      try { document.body.removeChild(canvas); } catch (e) {}
      window.removeEventListener('resize', resize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setRotation(prev => prev + rotationSpeed);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [rotationSpeed, isPaused]);

  useEffect(() => {
    const logo = document.querySelector('.sesi-logo');
    const members = document.querySelectorAll('.orbit-member');
    setTimeout(() => logo?.classList.add('show'), 200);
    members.forEach((m, i) => setTimeout(() => m.classList.add('show'), 400 + i * 150));
  }, [reset]);

  // hover handlers: show palette on hover and keep it while moving between orbit item and center palette
  const handleMemberHover = (member) => {
    // clear any pending leave timer
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
    hoveredMemberRef.current = member?.name ?? null;
    setIsPaused(true);
    setActiveMember(member);
  };

  const handleMemberLeave = (member) => {
    // start a short timeout - if neither orbit nor center are entered within 120ms then hide
    hoverTimerRef.current = setTimeout(() => {
      hoveredMemberRef.current = null;
      setActiveMember(null);
      setRotation(0);
      setReset(true);
      setTimeout(() => setReset(false), 2000);
      setIsPaused(false);
    }, 120);
  };

  const handleCenterEnter = () => {
    // cancel leave if entering center palette
    if (hoverTimerRef.current) { clearTimeout(hoverTimerRef.current); hoverTimerRef.current = null; }
  };
  const handleCenterLeave = () => {
    // when leaving center start same short timeout to reset
    hoverTimerRef.current = setTimeout(() => {
      hoveredMemberRef.current = null;
      setActiveMember(null);
      setRotation(0);
      setReset(true);
      setTimeout(() => setReset(false), 2000);
      setIsPaused(false);
    }, 120);
  };

  const handlePaletteClick = (e) => {
    // keep click handler but hover now controls palette
    e.stopPropagation();
    setActiveMember(null);
    setRotation(0);
    setReset(true);
    setTimeout(() => setReset(false), 2000);
    setIsPaused(false);
  };

  const getMemberTransform = (i) => {
    const angle = (i / boardMembers.length) * 2 * Math.PI + rotation * (Math.PI / 180);
    const x = Math.cos(angle) * orbitRadius;
    const y = Math.sin(angle) * orbitRadius + Math.min(scrollY / 200, 1) * 50;
    return `translate(${x}px, ${y}px)`;
  };

  return (
    <div style={{ overflowY: 'auto', height: '100vh' }}>
      <div className="solar-bg"></div>
      <div className="board-page">
        <div className="center-logo" onMouseEnter={handleCenterEnter} onMouseLeave={handleCenterLeave}>
          {activeMember ? (
            <motion.div 
              className="active-member" 
              key={activeMember.name}
              onClick={handlePaletteClick}
              initial={{ opacity: 0, y: 8 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            >
              <img src={activeMember.image} alt={activeMember.name} className="member-photo" />
              <h2>{activeMember.name}</h2>
              <h4 style={{ color: '#FFD700', marginBottom: '0.5rem' }}>{activeMember.position}</h4>
              <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>{activeMember.bio}</p>
              <a href={activeMember.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none' }}>
                <FaLinkedin size={20} color="#FFD700" />
                <span style={{ color: '#FFD700' }}>LinkedIn</span>
              </a>
            </motion.div>
          ) : (
            <img src="https://xerothermic-salmon-2ovi66bla6-ewggbsk2i2.edgeone.app/1.jpg" alt="SEsi Logo" className="sesi-logo" />
          )}
        </div>

        {!reset && boardMembers.map((member, i) => {
          const transform = getMemberTransform(i);
          const isActive = activeMember?.name === member.name;
          return (
            <div
              key={member.name}
              className={`orbit-member ${activeMember && !isActive ? 'fade' : ''} ${isActive ? 'hidden' : ''}`}
              style={{ transform }}
              onMouseEnter={() => handleMemberHover(member)}
              onMouseLeave={() => handleMemberLeave(member)}
            >
              <img src={member.image} alt={member.name} className="orbit-photo" style={{ width: '6rem', height: '6rem', borderRadius: '50%', border: '2px solid gold' }} />
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </div>
          );
        })}

        <motion.div className="orbit-ring ring1" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 120, ease: 'linear' }} />
        <motion.div className="orbit-ring ring2" animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 180, ease: 'linear' }} />
      </div>

      <div className="faculty-section">
        <h2>Faculty Coordinators</h2>
        <div className="faculty-grid">
          {facultyCoordinators.map((faculty, index) => (
            <div key={index} className="faculty-card">
              <img src={faculty.image} alt={faculty.name} className="faculty-photo" />
              <h3>{faculty.name}</h3>
              <p>{faculty.grade}</p>
              <p>{faculty.department}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SesiBoardPage;
