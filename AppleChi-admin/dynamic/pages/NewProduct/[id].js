import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function index() {
    let router = useRouter();
    let params = router.query.id
    useEffect(() => {
        switch (params) {
            case "mac": {
                console.log("Welcome To mac")
                break;
            }
            case "phone": {
                console.log("Welcome To Phone")
                break;
            }
            case "watch": {
                console.log("Welcome To watch")
                break;
            }
            default: {
                console.log("Please select ...")
                break;
            }
        }
    }, [params])
    return (
        <section className="Box-Information">
            <div className='d-flex justify-content-center text-center '>
                <h1 className='mb-5 mt-3' >
                افزودن {router.query.id}
            </h1>
            </div>
            <div className="Select-box ">
                <div className="boxes d-flex justify-content-center align-items-center">

                    <label htmlFor="type1">دستی</label>
                    <input type="radio" name="type1" />
                    <label htmlFor="type2">خودکار </label>
                    <input
                        type="radio"
                        name="type1"
                        aria-label="Radio button for following text input"
                    />
                </div>
                <br />
                <br />
                <div className="container justify-content-start align-items-start text-end">
                    <from>
                        <div className='row'>
                            <div class="col">
                                <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">نام محصول</label>
                                <input type="text" id="colFormLabelSm" class="form-control bg-dark" placeholder="نام محصول" />
                            </div>
                            <div class="col">
                                <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">سال تولید</label>
                                <input type="text" id="colFormLabelSm" class="form-control bg-dark" placeholder="سال تولید" />
                            </div>
                            <div class="col">
                                <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">نمایشگر</label>
                                <input type="text" id="colFormLabelSm" class="form-control bg-dark" placeholder="نمایشگر" />
                            </div>
                        </div>
                        <div className='row'>
                            <div class="col">
                                <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">پردازنده</label>
                                <input type="text" id="colFormLabelSm" class="form-control bg-dark" placeholder="نام محصول" />
                            </div>
                            <div class="col">
                                <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">ظرفیت</label>
                                <input type="text" id="colFormLabelSm" class="form-control bg-dark" placeholder="سال تولید" />
                            </div>
                            <div class="col">
                                <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">نوع نمایشگر</label>
                                <input type="text" id="colFormLabelSm" class="form-control bg-dark" placeholder="نمایشگر" />
                            </div>

                        </div>
                        <textarea
                            name=""
                            id=""
                            cols={30}
                            rows={10}
                            className="form-control mt-3 bg-dark w-100"
                            defaultValue={""}
                        />
                    </from>


                </div>
            </div>
        </section>

    )
}

