'use client';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const position = 'top-right';
export const notifySuccess = (message: string) => {
  toast.success(message || 'Operation successful!', {
    position,
    autoClose: 3000
  });
};

export const notifyError = (message: string) => {
  toast.error(message || 'Something went wrong!', {
    position,
    autoClose: 3000
  });
};

export const notifyInfo = (message: string) => {
  toast.info(message, {
    position,
    autoClose: 3000
  });
};
