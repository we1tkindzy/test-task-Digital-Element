const sizesFix = () => {
  const countSizes = () => {
    const vh = window.innerHeight * 0.01;
    const vw = (document.documentElement.clientWidth) * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.documentElement.style.setProperty('--vw', `${vw}px`);
  };

  detectScrollbar();
  countSizes();
  window.addEventListener('resize', countSizes);
};

const detectScrollbar = () => {
  const iframe = document.createElement('iframe');
  iframe.id = "hacky-scrollbar-resize-listener";
  iframe.style.cssText = 'height: 0; background-color: transparent; margin: 0; padding: 0; overflow: hidden; border-width: 0; position: absolute; width: 100%;';

  iframe.addEventListener('load', () => {
    iframe.contentWindow.addEventListener('resize', function() {
      try {
        const evt = new UIEvent('resize');
        window.dispatchEvent(evt);
      } catch(e) {}
    });
  });

  document.body.appendChild(iframe);
};

export {sizesFix};
