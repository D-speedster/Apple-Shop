import Swal from 'sweetalert2';

export const handleApiError = (error, customMessage = null) => {
  console.error('API Error:', error);
  
  let message = customMessage || 'مشکلی در ارتباط با سرور پیش آمد';
  
  if (error.message === 'Failed to fetch') {
    message = 'خطا در اتصال به سرور. لطفا اتصال اینترنت خود را بررسی کنید.';
  } else if (error.response) {
    message = error.response.data?.message || 'خطای سرور';
  }
  
  Swal.fire({
    title: 'خطا!',
    text: message,
    icon: 'error',
    confirmButtonText: 'باشه',
    confirmButtonColor: '#e72323'
  });
};

export const fetchWithRetry = async (url, options = {}, retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, options);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      if (i === retries - 1) {
        throw error;
      }
      
      // صبر کردن قبل از تلاش مجدد (exponential backoff)
      await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
    }
  }
};

export const showSuccessMessage = (message, timer = 2000) => {
  return Swal.fire({
    title: 'موفق!',
    text: message,
    icon: 'success',
    confirmButtonText: 'باشه',
    timer,
    confirmButtonColor: '#00d25b'
  });
};

export const showConfirmDialog = async (title, text) => {
  return await Swal.fire({
    title,
    text,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'بله',
    cancelButtonText: 'خیر',
    confirmButtonColor: '#0099ff',
    cancelButtonColor: '#6a7291'
  });
};
