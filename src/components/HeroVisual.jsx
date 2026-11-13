const signals=[['01','Understand the system'],['02','Validate what matters'],['03','Improve with intent']];
export default function HeroVisual(){
    return <div className="hero-visual-wrap" aria-label="Abstract quality engineering illustration">
    <div className="visual-label">
        <span>QUALITY ENGINEERING</span>
        <span>FIG. 001</span>
    </div>
    <div className="hero-visual">
        <div className="visual-orbit orbit-one"/>
        <div className="visual-orbit orbit-two"/>
        <div className="visual-orbit orbit-three"/>
        <div className="visual-core">
            <span>Q</span><i/>
    </div>
    <div className="visual-cross cross-x"/>
    <div className="visual-cross cross-y"/>
    <span className="orbit-point point-one"/>
    <span className="orbit-point point-two"/>
    <span className="orbit-point point-three"/>
    <span className="visual-coordinate coord-one">14° 35' N</span>
    <span className="visual-coordinate coord-two">121° 02' E</span>
    </div>
    <div className="visual-signals">{signals.map(([n,label])=>
        <div className="signal-row" key={n}>
            <span className="signal-number">{n}</span>
            <span>{label}</span>
            <span className="signal-indicator"/></div>)}
        </div>
    </div>}
