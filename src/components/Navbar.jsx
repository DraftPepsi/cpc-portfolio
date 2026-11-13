import { useState } from 'react';
const links = [['Projects','#projects'],['Experience','#experience'],['Toolkit','#toolkit'],['About','#about']];
export default function Navbar() {
  const [open,setOpen] = useState(false);
  return <header className="site-header">
    <a className="wordmark" href="#home">
      <span className="wordmark-mark">P.</span>
      <span className="wordmark-name">CARL PATRICK CAGUBCUB</span>
    </a>
    <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={()=>setOpen(!open)}>
      <span/><span/>
    </button>
    <nav className={open?'nav-links is-open':'nav-links'} aria-label="Main navigation">
      {links.map(([label,href])=><a key={label} href={href} onClick={()=>setOpen(false)}>{label}</a>)}
      <a className="nav-contact" href="mailto:your.email@example.com">Contact 
        <span>↗
        </span>
      </a>
    </nav>
  </header>;
}
