import api, { endpoints } from './api';

const authService = {
  // Login user
  login: async (credentials) => {
    try {
      const response = await api.post(endpoints.login, credentials);
      
      if (response.data.access_token) {
        localStorage.setItem('access_token', response.data.access_token);
        localStorage.setItem('user_type', credentials.userType);
      }
      
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  },

  // Register new user
  register: async (userData) => {
    try {
      const response = await api.post(endpoints.register, userData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Registration failed');
    }
  },

  // Get user profile
  getUserProfile: async (token) => {
    try {
      const response = await api.get(endpoints.profile, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch user profile');
    }
  },

  // Update user profile
  updateProfile: async (token, profileData) => {
    try {
      const response = await api.put(endpoints.profile, profileData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to update profile');
    }
  },

  // Logout user
  logout: async () => {
    try {
      await api.post(endpoints.logout);
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('access_token');
      localStorage.removeItem('user_type');
    }
  },

  // Refresh token
  refreshToken: async () => {
    try {
      const response = await api.post(endpoints.refresh);
      if (response.data.access_token) {
        localStorage.setItem('access_token', response.data.access_token);
      }
      return response.data;
    } catch (error) {
      throw new Error('Failed to refresh token');
    }
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    const token = localStorage.getItem('access_token');
    return !!token;
  },

  // Get user type
  getUserType: () => {
    return localStorage.getItem('user_type');
  },

  // Get stored token
  getToken: () => {
    return localStorage.getItem('access_token');
  },

  // Reset password
  resetPassword: async (email) => {
    try {
      const response = await api.post('/auth/reset-password', { email });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to reset password');
    }
  },

  // Verify email
  verifyEmail: async (token) => {
    try {
      const response = await api.post('/auth/verify-email', { token });
      return response.data;
    } catch (error) {
      throw new Error('Email verification failed');
    }
  },
};

export default authService;