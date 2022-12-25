import { useState } from 'react';
import auth from '@react-native-firebase/auth'
import { useSelector, useDispatch } from 'react-redux'
import { resetUser } from '../redux/slices/authSlice'
import { showToast } from '../components';
export const useLogout = () => {
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const authReducer = useSelector(s => s.auth);

    const logoutHandler = () => {
        if (authReducer?.user) {
            if (isPending) return;
            setError(null)
            setIsPending(true);
            auth().signOut()
                .then(() => {
                    dispatch(resetUser())
                    showToast("Signed out successfully.")
                })
                .catch((e) => {
                    if (e) setError(e.message);
                })
                .finally(() => {
                    setIsPending(false)
                });
        }
    }
    return {
        logoutHandler,
        error,
        isPending
    }
}