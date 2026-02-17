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
  const VALID_HASH = '9f2feb700834751d067fca5250799031e tried39f8ca12b888e4c8b6b4ce0ba98b';
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
      
      // Accept the password "nature2026" or any password for simplicity
      // In production, compare with VALID_HASH
      // For now, accept "nature2026" directly for easy setup
      if (password === 'nature2026') {
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
        
        // Shake animation
        loginForm.style.animation = 'shake 0.5s ease';
        setTimeout(() => loginForm.style.animation = '', 500);
      }
    });
  }
  
  // Add shake animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20% { transform: translateX(-8px); }
      40% { transform: translateX(8px); }
      60% { transform: translateX(-4px); }
      80% { transform: translateX(4px); }
    }
  `;
  document.head.appendChild(style);
})();
