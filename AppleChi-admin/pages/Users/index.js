import React from 'react'
import TitlePage from '@/components/template/TitlePage'
import User from '@/components/modules/User'
export default function index() {
  return (
    <div>

      <TitlePage title='کاربران سایت'></TitlePage>
      <div>
        <table class="table table-dark mt-4 text-center">
          <thead>
            <tr>
              <th scope="col">pic</th>
              <th scope="col">نام کاربری</th>
              <th scope="col">ایمیل</th>
              <th scope="col">نقش</th>
              <th scope="col">پیوستن</th>
              <th scope="col">آخرین فعالیت</th>
              <th scope="col">کامنت / نوشته ها</th>
            </tr>
          </thead>
          <tbody>
            <User />
            <User />
            <User />
            <User />
            <User />
            <User />
          </tbody>
        </table>
      </div>
    </div>
  )
}
