import { useEffect } from 'react';
import Header from '../site/Header';
import Footer from '../site/Footer';

export default function MainLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
      />
      
      <Header />
      
      <main>
        {children}
      </main>
      
      <Footer />
    </>
  );
}
