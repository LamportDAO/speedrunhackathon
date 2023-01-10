export const BrowserName = () => {
  let browserName;
  const isMac =
    typeof window !== 'undefined'
      ? navigator.platform.toUpperCase().indexOf('MAC') >= 0
      : false;

  if (isMac) {
    let userAgent = navigator.userAgent;
    if (userAgent.match(/chrome|chromium|crios/i)) {
      browserName = 'chrome';
    } else if (userAgent.match(/firefox|fxios/i)) {
      browserName = 'firefox';
    } else if (userAgent.match(/safari/i)) {
      browserName = 'safari';
    } else if (userAgent.match(/opr\//i)) {
      browserName = 'opera';
    } else if (userAgent.match(/edg/i)) {
      browserName = 'edge';
    } else {
      browserName = 'No browser detection';
    }
  }
  return browserName;
};
