/* =============================================
   Réseau Finance & Nature — Auth (Members Area)
   Simple client-side password protection
   
   DEFAULT PASSWORD: "nature2026"
   To change: update the hash below.
   Generate new hash: run in browser console:
     crypto.subtle.digest('SHA-256', new TextEncoder().encode('YOUR_PASSWORD'))
       .then(h => console.log(Array.from(new Uint8Array(h)).map(b=>b.toString(16).padStart(2,'0')).join('')))
   ============================================= */

(function() {
  // SHA-256 hash of "nature2026"
  const VALID_HASH = '22cc6418d17f474839e8c4d010bf347bf882bcf42309327b2e23b822ca7036c4';
  const STORAGE_KEY = 'rfn_auth';
  const SESSION_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days
  
  const loginGate = document.getElementById('loginGate');
  const protectedContent = document.getElementById('protectedContent');
  const loginForm = document.getElementById('loginForm');
  const loginError = document.getElementById('loginError');
  const passwordInput = document.getElementById('password');
  
  if (!loginGate || !protectedContent) return;
  
  // Check stored session
  function checkSession() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const data = JSON.parse(stored);
        if (data.expires > Date.now()) {
          showContent();
          return true;
        } else {
          localStorage.removeItem(STORAGE_KEY);
        }
      }
    } catch(e) {}
    return false;
  }
  
  function showContent() {
    loginGate.style.display = 'none';
    protectedContent.style.display = 'block';
    
    // Re-trigger fade animations
    protectedContent.querySelectorAll('.fade-up').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 80);
    });
  }
  
  async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }
  
  // Try session first
  if (checkSession()) return;
  
  // Login form handler
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const password = passwordInput.value.trim();
      if (!password) return;
      
      const hash = await hashPassword(password);
      
      if (hash === VALID_HASH) {
        // Store session
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
          expires: Date.now() + SESSION_DURATION
        }));
        
        showContent();
      } else {
        if (loginError) {
          loginError.style.display = 'block';
        }
        passwordInput.value = '';
        passwordInput.focus();
      }
    });
  }
})();
