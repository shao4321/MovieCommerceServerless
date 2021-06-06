import { useEffect } from "react";

const useScroll = (headerBar, setAtTop) => {
  const scrollEffectHeader = (e) => {
    if (headerBar.current) {
      if (e.wheelDelta < 0) {
        headerBar.current.classList.add("nav-up");
        return;
      }
      headerBar.current.classList.remove("nav-up");
    }
  };

  const scrollUpDownBtn = () =>
    window.pageYOffset === 0 ? setAtTop(true) : setAtTop(false);

  useEffect(() => {
    document.addEventListener("mousewheel", scrollEffectHeader, {
      passive: true,
    });
    return () => {
      document.removeEventListener("mousewheel", scrollEffectHeader);
    };
  }, []);

  useEffect(() => {
    window.onscroll = () => scrollUpDownBtn();
    return () => {
      window.onscroll = null;
    };
  }, []);
};

export default useScroll;
