const Textarea = ({value, className, ...otherProps}) => {
    return (
        <textarea
            {...otherProps}
            value={value}
            rows={5}
            className={`w-[300px] sm:max-w-[400px]  sm:min-w-[350px] sm:w-[90%] border-2 border-[#2a2a2a] p-2 sm:p-4 pt-3 pb-3  placeholder:text-[#616161]
            outline-none ${value ? 'bg-green-900' : 'bg-[#451c32]'} text-white text-lg sm:text-xl font-Poppins rounded-sm
            focus:ring-[1px] focus:ring-black focus:bg-[#642d19] shadow-[7px_7px_0px_1px_rgb(0,0,0)] ${className}`}
        />
    );
}

export default Textarea;