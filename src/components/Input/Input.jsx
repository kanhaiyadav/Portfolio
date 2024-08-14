
const Input = ({value, className, ...otherProps}) => {
    return (
        <input
            {...otherProps}
            value={value}
            className={`sm:max-w-[400px] w-[300px] sm:min-w-[350px] sm:w-[90%] border-2 border-[#2a2a2a] p-2 sm:p-4 sm:pt-3  sm:pb-3  placeholder:text-[#616161]
                outline-none ${value ? 'bg-green-900' : 'bg-[#451c32]'} text-white text-lg sm:text-xl font-Poppins rounded-sm
            focus:ring-[1px] focus:ring-black focus:bg-[#642d19] shadow-[7px_7px_0px_1px_rgb(0,0,0)] ${className}`}
        />
    );
}

export default Input;