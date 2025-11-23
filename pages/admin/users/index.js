import React from 'react'
import TitlePage from '@/components/admin/TitlePage'
import User from '@/components/admin/User'

export default function AdminUsers() {
  return (
    <div>
      <TitlePage title='کاربران سایت' />
      
      <div className="mt-4">
        <table className="table table-dark text-center">
          <thead>
            <tr>
              <th scope="col">تصویر</th>
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
