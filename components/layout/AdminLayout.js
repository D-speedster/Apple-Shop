import { useEffect } from 'react';
import HeaderAdmin from '../admin/HeaderAdmin';
import SideBar from '../admin/SideBar';

export default function AdminLayout({ children }) {
  useEffect(() => {
    // اضافه کردن استایل ادمین
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/admin.css';
    document.head.appendChild(link);
    
    // تغییر بک‌گراند
    document.body.style.backgroundColor = '#000000';
    document.body.style.color = '#FFFf';
    
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
    };
  }, []);
  
  return (
    <div className="container-fluid">
      <div className="main-content">
        <div className="row">
          <SideBar />
          
          <div className="col-lg-10 content">
            <HeaderAdmin />
            
            <div className="ms-lg-5">
              {children}
            </div>
          </div>
        </div>
      </div>
      
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />
    </div>
  );
}
