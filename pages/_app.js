import { useRouter } from 'next/router';
import MainLayout from '@/components/layout/MainLayout';
import AdminLayout from '@/components/layout/AdminLayout';
import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  
  // اگر مسیر با /admin شروع شه، لی‌اوت ادمین رو نشون بده
  const isAdminPage = router.pathname.startsWith('/admin');
  
  // انتخاب لی‌اوت مناسب
  const Layout = isAdminPage ? AdminLayout : MainLayout;
  
  // اضافه کردن استایل ادمین برای صفحات ادمین
  if (isAdminPage && typeof document !== 'undefined') {
    document.body.style.backgroundColor = '#000000';
    document.body.style.color = '#FFFf';
  } else if (typeof document !== 'undefined') {
    document.body.style.backgroundColor = '#ffffff';
    document.body.style.color = '#000000';
  }
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
