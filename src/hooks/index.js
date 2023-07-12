import { useContext, useState, useEffect } from 'react';
import jwt from 'jwt-decode';

import { AuthContext } from '../providers/AuthProvider';
import { editProfile, login as userLogin, register , fetchUserFriends} from '../api';
import {
  setItemInLocalStorage,
  LOCALSTORAGE_TOKEN_KEY,
  removeItemFromLocalStorage,
  getItemFromLocalStorage,
} from '../utils';

export const useAuth = () => {
  return useContext(AuthContext);
};

export const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const getUser = async () =>{
      const userToken = getItemFromLocalStorage(LOCALSTORAGE_TOKEN_KEY);

     if (userToken) {
      const user = jwt(userToken);
      const response = await fetchUserFriends()
      let friends = []

      if(response.success){
          friends=response.data.friends
      }
      setUser({
        ...user,
        friends
      }) 
    }

    setLoading(false);

    }
    getUser()
    
    
  }, []);

  const updateUser = async (userId, name, password, confirmPassword) => {
    const response = await editProfile(userId, name, password, confirmPassword);

    console.log('response', response);
    if (response.success) {
      setUser(response.data.user);
      setItemInLocalStorage(
        LOCALSTORAGE_TOKEN_KEY,
        response.data.token ? response.data.token : null
      );
      return {
        success: true,
      };
    } else {
      return {
        success: false,
        message: response.message,
      };
    }
  };

  const login = async (email, password) => {
    try {
      const response = await userLogin(email, password);
      console.log('Response:', response);
  
      if (response.success) {
        // console.log(response.data.user)
  
        setUser(response.data.user);
        setItemInLocalStorage(
          LOCALSTORAGE_TOKEN_KEY,
          response.data.token ? response.data.token : null
        );
        return {
          success: true,
        };
      } else {
        return {
          success: false,
          message: response.message,
        };
      }
    } catch (error) {
      // Handle any error that occurred during the API call
      console.log('Error:', error);
      return {
        success: false,
        message: 'An error occurred during login.',
      };
    }
  };

  const signup = async (name, email, password, confirmPassword) => {
    const response = await register(name, email, password, confirmPassword);

    if (response.success) {
      return {
        success: true,
      };
    } else {
      return {
        success: false,
        message: response.message,
      };
    }
  };

  const logout = () => {
    setUser(null);
    removeItemFromLocalStorage(LOCALSTORAGE_TOKEN_KEY);
  };

  return {
    user,
    login,
    logout,
    loading,
    signup,
    updateUser,
  };
};
