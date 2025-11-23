import React, { useState } from 'react'

export default function comment() {
    let [txt, settxt] = useState(' لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.    ')

    return (
        <li className='comment-item'>
            <div className='container-fluid'>
                <div className='d-lg-flex justify-content-center'>
                    <div className='col'>
                        <span>#4755</span>
                    </div>
                    <div className='col'>نام کاربری : sparta</div>
                    <div className='col'><p> متن کامنت:<a href=''>{txt.slice(0, 24).concat('...')}</a></p></div>
                    <div className='col'>
                        <select className='form-control bg-white w-50 float-start '>
                            <option>وضعیت</option>
                            <option>تایید</option>
                            <option>حذف</option>
                            <option>بایگانی</option>

                        </select>
                    </div>
                </div>
                {/* <table class="table table-dark" style={{ backgroundcolor: '#181c2a' }}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">نام کاربری</th>
                            <th scope="col">متن کامنت</th>
                            <th scope="col">تاریخ</th>
                            <th scope="col">وضعیت</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <select className='form-control bg-white w-50 '>
                                    <option>وضعیت</option>
                                    <option>تایید</option>
                                    <option>حذف</option>
                                    <option>بایگانی</option>

                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>
                                <select className='form-control bg-white w-50 '>
                                    <option>وضعیت</option>
                                    <option>تایید</option>
                                    <option>حذف</option>
                                    <option>بایگانی</option>

                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                            <td>
                                <select className='form-control bg-white w-50'>
                                    <option>وضعیت</option>
                                    <option>تایید</option>
                                    <option>حذف</option>
                                    <option>بایگانی</option>

                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table> */}
            </div>
        </li>
    )
}
