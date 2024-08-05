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
        <div className="shrink-0 border-2 border-black skill-card flex flex-col md:flex-row gap-3 md:w-[300px] lg:w-[400px] h-[125px] p-3 rounded-xl shadow-[8px_8px_0px_1px_rgba(0,0,0,1)]" {...otherProps}>
            <div className="h-[80%] md:h-full" style={imgStyle}>
                <img src={imgPath} alt={name} className="h-full rounded-xl" />
            </div>
            <div className="flex-1 flex flex-col justify-between">
                <h2 className="text-white md:text-2xl lg:text-3xl font-semibold font-Poppins hidden md:block">{name}</h2>
                <p className="text-[#e2e2e2] md:text-sm lg:text-lg font-Playwrite1 hidden md:block">Started {exp} years ago</p>
                <div className={`skill-progress w-full h-3 md:h-6 lg:h-8 md:mt-2 rounded-full shadow-[inset_0_0_8px_rgba(0,0,0,0.5)] relative`}
                    style={{ '--progress-width': `${progress}%`, '--progress-color': progressColor }}
                >
                </div>
            </div>
        </div>
    );
}

export default SkillCard;