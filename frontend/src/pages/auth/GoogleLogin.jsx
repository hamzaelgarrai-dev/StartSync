import React from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../features/auth/authSlice';

function GoogleLogin() {
  const dispatch = useDispatch();

  const handleGoogleLogin = async () => {
    try {
      // Open Google login in a popup
      const width = 600;
      const height = 600;
      const left = (window.innerWidth - width) / 2;
      const top = (window.innerHeight - height) / 2;

      const popup = window.open(
        'http://api.localhost/api/auth/google/redirect',
        'Google Login',
        `width=${width},height=${height},top=${top},left=${left}`
      );

      // Polling the popup for the token
      const timer = setInterval(async () => {
        try {
          if (!popup || popup.closed) {
            clearInterval(timer);
            return;
          }

          // Try to access location (might throw if cross-origin)
          const url = popup.location.href;
          if (url.includes('/api/auth/google/callback')) {
            const response = await fetch(url);
            const data = await response.json();

            if (data.access_token) {
              // Save user + token in Redux
              dispatch(setCredentials(data));

              // Close popup
              popup.close();

              // Optional: redirect based on role
              if (data.user.role === 'project_manager') window.location.href = '/manager/dashboard';
              else if (data.user.role === 'project_member') window.location.href = '/member/dashboard';
              else window.location.href = '/client/dashboard';
            }
            clearInterval(timer);
          }
        } catch (err) {
          // Cross-origin errors will occur until the popup redirects to callback
        }
      }, 500);
    } catch (err) {
      console.error('Google login failed', err);
    }
  };

  return (
    <button className='cursor-pointer' onClick={handleGoogleLogin}>
      Login with Google
    </button>
  );
}

export default GoogleLogin;
