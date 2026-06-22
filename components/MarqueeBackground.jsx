"use client";

const MARQUEE_TEXT = "VEND AI  •  VEND AI  •  VEND AI  •  VEND AI  •  VEND AI  •  VEND AI  \u00a0\u00a0";

export default function MarqueeBackground() {
  return (
    <div className="marquee-container">
      <div className="marquee-track">
        <span className="marquee-text">{MARQUEE_TEXT}</span>
        <span className="marquee-text">{MARQUEE_TEXT}</span>
      </div>
    </div>
  );
}
