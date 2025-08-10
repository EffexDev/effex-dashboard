const AnimatedButton = ({ children, onClick, href }) => {
    if (href) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-[#331E36] text-white font-semibold  shadow-md hover:bg-[#5a345f] focus:outline-none transition-transform transform hover:scale-103 active:scale-90 inline-block text-center max-w-[50%] text-sm">
          {children}
        </a>
      );
    }
  
    return (
      <button
        className="px-4 py-2 bg-[#331E36] text-white font-semibold  shadow-md hover:bg-[#5a345f]  focus:outline-none transition-transform transform hover:scale-103 active:scale-90 max-w-[50%]"
        onClick={onClick}>
        {children}
      </button>
    );
  };
  
  export default AnimatedButton;
  