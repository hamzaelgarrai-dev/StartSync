import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials } from './authSlice';
import GoogleSvg from '../../assets/Svgs/GoogleSvg';

function GoogleLogin() {
  const dispatch = useDispatch();

  useEffect(() => {
    // 1. Define the listener to catch data from the popup
    const handleMessage = (event) => {
      // Security check: Ensure message comes from your Laravel backend
      if (event.origin !== "http://localhost:8000") return;

      if (event.data.type === "AUTH_SUCCESS") {
        const data = event.data.payload;

        // 2. Save credentials to Redux
        dispatch(setCredentials(data));

        // 3. Redirect based on role
        if (data.user.role === 'project_manager') {
          window.location.href = '/manager/dashboard';
        } else if (data.user.role === 'project_member') {
          window.location.href = '/member/dashboard';
        } else {
          window.location.href = '/client/dashboard';
        }
      }
    };

    window.addEventListener('message', handleMessage);
    
    // Cleanup listener on unmount
    return () => window.removeEventListener('message', handleMessage);
  }, [dispatch]);

  const handleGoogleLogin = () => {
    const width = 600;
    const height = 600;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    // Open the Laravel redirect route
    window.open(
      'http://localhost:8000/api/auth/google/redirect',
      'Google Login',
      `width=${width},height=${height},top=${top},left=${left}`
    );
  };

  return (
    <button 
      type='button' 
      className='cursor-pointer bg-white border border-gray-500 w-full h-12 rounded-4xl flex justify-center items-center space-x-4' 
      onClick={handleGoogleLogin}
    >
      <span><GoogleSvg/></span>
      <span>Login with Google</span>
    </button>
  );
}

export default GoogleLogin;