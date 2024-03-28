import React from 'react'

import TitlePage from '@/components/template/TitlePage'
import Comment from '@/components/modules/comment'

export default function index() {
  return (
    <div>
      <TitlePage title='کامنت ها'></TitlePage>
      <br />

      <ul className='box-comment'>
        <div className='container-fluid'>
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">

              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-link" aria-current="page" href="#">همه</a>
                  <a class="nav-link" href="#">در انتظار تایید</a>
                  <a class="nav-link" href="#">تایید شده</a>
                  <a class="nav-link" href="#">حذف شده</a>
                </div>
              </div>
            </div>
          </nav>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
        </div>
      </ul>
    </div>
  )
}
