import axios from 'axios';
import { toast } from 'react-toastify';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status, data } = error.response;
      
      switch (status) {
        case 401:
          // Unauthorized - redirect to login
          localStorage.removeItem('access_token');
          localStorage.removeItem('user_type');
          window.location.href = '/login';
          toast.error('Session expired. Please login again.');
          break;
          
        case 403:
          toast.error('You do not have permission to perform this action.');
          break;
          
        case 404:
          toast.error('Resource not found.');
          break;
          
        case 500:
          toast.error('Server error. Please try again later.');
          break;
          
        default:
          if (data && data.message) {
            toast.error(data.message);
          } else {
            toast.error('An error occurred. Please try again.');
          }
      }
    } else if (error.request) {
      // Network error
      toast.error('Network error. Please check your connection.');
    } else {
      // Request setup error
      console.error('Request error:', error.message);
      toast.error('Request failed. Please try again.');
    }
    
    return Promise.reject(error);
  }
);

// API endpoints
export const endpoints = {
  // Auth
  login: '/auth/login',
  register: '/auth/register',
  logout: '/auth/logout',
  refresh: '/auth/refresh',
  profile: '/auth/profile',
  
  // Student
  studentDashboard: '/student/dashboard',
  studentTimetable: '/student/timetable',
  studentAssignments: '/student/assignments',
  studentExams: '/student/exams',
  studentProfile: '/student/profile',
  
  // Lecturer
  lecturerDashboard: '/lecturer/dashboard',
  lecturerClasses: '/lecturer/classes',
  lecturerAssignments: '/lecturer/assignments',
  lecturerDeadlines: '/lecturer/deadlines',
  
  // Admin
  adminStats: '/admin/stats',
  adminExams: '/admin/exams',
  adminTimetables: '/admin/timetables',
  adminCirculars: '/admin/circulars',
  adminEvents: '/admin/events',
  adminApprovals: '/admin/approvals',
  
  // Common
  notifications: '/notifications',
  calendar: '/calendar',
  upload: '/upload',
};

// Helper functions
export const getAuthHeaders = () => {
  const token = localStorage.getItem('access_token');
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const handleApiError = (error) => {
  if (error.response) {
    return {
      error: true,
      message: error.response.data.message || 'An error occurred',
      status: error.response.status,
    };
  }
  return {
    error: true,
    message: 'Network error. Please check your connection.',
  };
};

export default api;