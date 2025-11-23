import React, { useState } from 'react'
import TitlePage from '@/components/admin/TitlePage'
import Comment from '@/components/admin/Comment'

export default function AdminComments() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div>
      <TitlePage title='کامنت ها' />

      <ul className='box-comment mt-4'>
        <div className='container-fluid'>
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNavAltMarkup" 
                aria-controls="navbarNavAltMarkup" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
                style={{ backgroundColor: '#3c3e4d' }}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a 
                    className={`nav-link ${activeFilter === 'all' ? 'active' : ''}`}
                    href="#" 
                    onClick={(e) => { e.preventDefault(); setActiveFilter('all'); }}
                  >
                    همه
                  </a>
                  <a 
                    className={`nav-link ${activeFilter === 'pending' ? 'active' : ''}`}
                    href="#"
                    onClick={(e) => { e.preventDefault(); setActiveFilter('pending'); }}
                  >
                    در انتظار تایید
                  </a>
                  <a 
                    className={`nav-link ${activeFilter === 'approved' ? 'active' : ''}`}
                    href="#"
                    onClick={(e) => { e.preventDefault(); setActiveFilter('approved'); }}
                  >
                    تایید شده
                  </a>
                  <a 
                    className={`nav-link ${activeFilter === 'deleted' ? 'active' : ''}`}
                    href="#"
                    onClick={(e) => { e.preventDefault(); setActiveFilter('deleted'); }}
                  >
                    حذف شده
                  </a>
                </div>
              </div>
            </div>
          </nav>
          
          <div className="mt-3">
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </div>
        </div>
      </ul>
    </div>
  )
}
