import { GoogleAuthProvider, getAuth, getRedirectResult, signInWithRedirect } from 'firebase/auth';
import { app } from '../firebase';
import { signInSuccess } from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function OAuth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Handle redirect result after returning from Google sign-in
  useEffect(() => {
    const auth = getAuth(app);
    getRedirectResult(auth)
      .then(async (result) => {
        if (result) {
          const user = result.user;

          // Send user data to your backend
          const res = await fetch('/api/auth/google', {
            method: "POST",
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify({
              name: user.displayName,
              email: user.email,
              photo: user.photoURL
            }),
            credentials: 'include' // Include cookies in the request
          });

          if (res.ok) {
            const data = await res.json();
            dispatch(signInSuccess(data));
            navigate('/');
          } else {
            console.error('Error response from server:', await res.text());
          }
        }
      })
      .catch((error) => {
        console.error('Error handling Google sign-in redirect:', error);
      });
  }, [dispatch, navigate]);

  // Trigger Google sign-in with redirect
  const handleGoogleClick = async () => {
    try {
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.error('Could not sign in with Google:', error);
    }
  };

  return (
    <button
      className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
      onClick={handleGoogleClick}
    >
      Continue with Google
    </button>
  );
}
