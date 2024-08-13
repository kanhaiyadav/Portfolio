import './SkillCard.styles.css';

const SkillCard = ({ imgPath, name, progress, imgStyle, ...otherProps }) => {
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
        <div className="shrink-0 skill-card flex flex-col items-center gap-3 p-3 rounded-sm shadow-[0px_0px_10px_3px_rgba(0,0,0,0.5)] w-[200px]" {...otherProps}>
            <div className="h-[100px] w-[100px]" style={imgStyle}>
                <img src={imgPath} alt={name} className="h-full w-full rounded-xl" />
            </div>
            <div className="flex-1 flex flex-col justify-between w-full text-center">
                <h2 className="text-white md:text-2xl lg:text-3xl font-semibold font-Poppins hidden md:block">{name}</h2>
                <div className={`skill-progress w-full h-3 md:mt-2 rounded-full shadow-[inset_0_0_8px_rgba(0,0,0,0.5)] relative`}
                    style={{ '--progress-width': `${progress}%`, '--progress-color': progressColor }}
                >
                </div>
            </div>
        </div>
    );
}

export default SkillCard;