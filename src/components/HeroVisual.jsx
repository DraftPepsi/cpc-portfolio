
import '../styles/HeroVisual.css';
import automationCore from '../assets/automation-core.png';

export default function HeroVisual() {
    return (
        <div className="automation-core-wrap">

            {/* Ambient glow behind the core */}
            <div
                className="automation-core-glow"
                aria-hidden="true"
            />

            {/* Floating automation core */}
            <img
                className="automation-core-image"
                src={automationCore}
                alt="Glowing automation core representing software quality, testing, and engineering"
                draggable="false"
            />

            {/* Stationary glow underneath */}
            <div
                className="automation-core-ground-glow"
                aria-hidden="true"
            />

        </div>
    );
}
