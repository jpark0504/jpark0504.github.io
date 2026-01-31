export function loadGtag() {
  const GA_ID = process.env.REACT_APP_GA_ID;
  if (!GA_ID) return;

  // inject gtag script
  const existing = document.querySelector(`script[src*="googletagmanager.com/gtag/js?id="]`);
  if (!existing) {
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);
  }

  // initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);} 
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID, { anonymize_ip: true });
}
