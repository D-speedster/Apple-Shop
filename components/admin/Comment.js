import React, { useState } from 'react'

export default function Comment() {
    const [txt] = useState('لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.');

    return (
        <li className='comment-item'>
            <div className='container-fluid'>
                <div className='row align-items-center'>
                    <div className='col-lg-1 col-md-2 col-12 mb-2 mb-lg-0'>
                        <span style={{ color: '#00d25b', fontWeight: 'bold' }}>#4755</span>
                    </div>
                    <div className='col-lg-2 col-md-3 col-12 mb-2 mb-lg-0'>
                        <strong>نام کاربری:</strong> sparta
                    </div>
                    <div className='col-lg-6 col-md-5 col-12 mb-2 mb-lg-0'>
                        <p className='mb-0'>
                            <strong>متن کامنت:</strong>
                            <a href='#' className='ms-2' style={{ color: '#6a7291' }}>
                                {txt.slice(0, 60).concat('...')}
                            </a>
                        </p>
                    </div>
                    <div className='col-lg-3 col-md-2 col-12'>
                        <select className='form-control w-100'>
                            <option>وضعیت</option>
                            <option>تایید</option>
                            <option>حذف</option>
                            <option>بایگانی</option>
                        </select>
                    </div>
                </div>
            </div>
        </li>
    )
}
