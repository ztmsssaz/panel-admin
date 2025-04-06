import { useState, useRef, useEffect } from 'react';

const ButtonSwitcher = () => {
  const [active, setActive] = useState<number>(0);
  const btnRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const [highlightStyle, setHighlightStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const currentBtn = btnRefs.current[active];
    if (currentBtn && currentBtn.parentElement) {
      const rect = currentBtn.getBoundingClientRect();
      const parentRect = currentBtn.parentElement.getBoundingClientRect();
      setHighlightStyle({
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        transform: `translateX(${rect.left - parentRect.left}px)`,
      });
    }
  }, [active]);

  const buttons: string[] = ['اولی', 'دومی', 'سومی'];

  return (
    <div className="btn-group-wrapper mt-5">
      <div className="highlight" style={highlightStyle}></div>
      <div className="btn-group">
        {buttons.map((label, i) => (
          <button
            key={i}
            ref={(el: any) => (btnRefs.current[i] = el)}
            className={`btn ${active === i ? 'text-white' : 'text-dark'}`}
            onClick={() => setActive(i)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonSwitcher;
