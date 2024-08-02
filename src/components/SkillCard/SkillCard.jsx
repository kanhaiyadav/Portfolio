import './SkillCard.styles.css';

const SkillCard = ({ imgPath, name, progress, exp, imgStyle, ...otherProps }) => {
    let progressColor;
    if (progress < 25) {
        progressColor = '#ff0000';
    } else if (progress < 50) {
        progressColor = '#ff9900';
    } else if (progress < 75) {
        progressColor = '#f7df2e';
    } else if (progress < 90) {
        progressColor = '#00ff00';
    } else {
        progressColor = '#00b7ff';
    }
    return (
        <div className="shrink-0 skill-card flex gap-3 w-[400px] h-[125px] p-3 rounded-xl shadow-[6px_6px_0px_3px_rgba(0,0,0,1)]" {...otherProps}>
            <div className="h-full" style={imgStyle}>
                <img src={imgPath} alt={name} className="h-full rounded-xl" />
            </div>
            <div className="flex-1">
                <h2 className="text-white text-3xl font-semibold font-Poppins">{name}</h2>
                <p className="text-[#e2e2e2] text-lg font-Playwrite1">Started {exp} years ago</p>
                <div className={`skill-progress w-full h-8 mt-2 rounded-full shadow-[inset_0_0_8px_rgba(0,0,0,0.5)] relative`}
                    style={{ '--progress-width': `${progress}%`, '--progress-color': progressColor }}
                >
                </div>
            </div>
        </div>
    );
}

export default SkillCard;