import React from 'react'
import Products from '../../components/modules/Product'
import TitlePage from '@/components/template/TitlePage'

export default function ProductsPage() {
    return (
        <>
            <div className='header-products'>
                <TitlePage title=' محصولات'></TitlePage>


            </div>
            <div className='container-fluid'>

                <table class="table table-dark mt-4">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">محصول</th>
                            <th scope="col">شناسه</th>
                            <th scope="col">دسته بندی</th>
                            <th scope="col">تاریخ</th>
                            <th scope="col">نویسنده</th>
                            <th scope="col">وضعیت</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Products />
                        <Products />
                        <Products />
                        <Products />
                        <Products />
                        <Products />
                    </tbody>
                </table>
            </div>

            <div className='container'>
                <div className='d-flex justify-content-center'>
                    {Array.from({ length: 38 / 6 }).map((item, index) => {
                        return <div className='btn-group'>
                            <button className='btn btn-success'>{index + 1}</button>
                        </div>
                    })}
                </div>
            </div>

        </>
    )
}
