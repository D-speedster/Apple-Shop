import TitlePage from '@/components/template/TitlePage'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import dotenv from "dotenv";
export default function index({ data }) {

    let router = useRouter();
    let params = router.query.id
    let [title, Settitle] = useState('HEllo');
    let [price, Setprice] = useState();
    let [img, Setimg] = useState();
    let [gallery, setgallery] = useState();
    let [describe, setdescribe] = useState();
    let [cpu, SetCpu] = useState();
    let [size, SetSize] = useState();
    let [Ram, SetRam] = useState();
    let [Display, SetDisplay] = useState();
    let [SendINFO, SetSendINFO] = useState();
    async function SendToDb() {

        dotenv.config();

        const filename = "25533.jpeg"; // change this to your filename

        const client = new S3Client({
            region: "default",
            endpoint: process.env.LIARA_ENDPOINT,
            credentials: {
                accessKeyId: process.env.LIARA_ACCESS_KEY,
                secretAccessKey: process.env.LIARA_SECRET_KEY,
            },
        });
        const params = {
            Bucket: process.env.LIARA_BUCKET_NAME,
            Key: filename,
        };

        const command = new GetObjectCommand(params);
        getSignedUrl(client, command).then((url) => console.log(url));
        let obj = {
            title,
            price,
            category: params,
            description: describe,
            ram: Ram,
            cpu: cpu
        }
        let SendDt = await fetch('http://localhost:3000/api/products', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(obj)

        });
        let Gett = await SendDt.json();
        console.log(Gett)
        Settitle('')
        Setprice('')
        Setimg('')
        setgallery('')
        setdescribe('')
        SetCpu('')
        SetSize('')
        SetRam('')
        SetDisplay('')

        Swal.fire({
            position: "top-end",
            background: '#181c2a',
            color: '#fff',
            icon: "success",
            title: "پست با موفقیت ثبت شد",
            showConfirmButton: false,
            timer: 2500
        });
    }
    useEffect(() => {
        switch (params) {
            case "mac": {
                console.log("Welcome To mac")
                Settitle('')
                Setprice('')
                break;

            }
            case "phone": {
                console.log("Welcome To Phone")
                Settitle('')
                Setprice('')
                break;
            }
            case "watch": {
                console.log("Welcome To watch")
                Settitle('')
                Setprice('')
                break;
            }
            default: {
                router.push('/')
                console.log("Please select ...")
                break;
            }
        }
    }, [params])
    let Filevalidation = async (event) => {
        function convertImageToBuffer() {
            const file = event.target.files[0]
            console.log(file)
            const reader = new FileReader();

            reader.onload = () => {
                const buffer = Buffer.from(reader.result);

                console.log(buffer);
            };

            reader.readAsArrayBuffer(file);
        }
        convertImageToBuffer()
        let { name, type, size, lastModifiedDate } = event.target.files[0]
        let obj = {

            name,
            type,
            size,
            lastModifiedDate,
            code: 'binaryString'
        }

        fetch('../api/Upload',
            {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, *cors, same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, *same-origin, omit
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(obj)
            }).then(res => res.json()).then(data => console.log(data))
        console.log(event.target.files[0])
    }
    return (
        <>
            <TitlePage title='افزودن محصول'></TitlePage>
            <section className="Box-Information">


                {/* <div className="boxes d-flex justify-content-center align-items-center">

                  <label htmlFor="type1">دستی</label>
                  <input type="radio" name="type1" />
                  <label htmlFor="type2">خودکار </label>
                  <input
                      type="radio"
                      name="type1"
                      aria-label="Radio button for following text input"
                  />
              </div> */}
                <br />
                <br />
                <div className="container">
                    <div className='d-lg-flex justify-content-between  mb-5 '>
                        <div className='col col-lg-4 text-end me-4'>
                            <h4>افزودن {params} جدید</h4>
                        </div>


                        <div className='col col-lg-4 text-lg-start'>
                            <button style={{
                                backgroundColor: 'inherit',
                                height: '54px',
                                width: '124px',
                                borderRadius: '8px',
                                fontSize: '16px',
                                color: '#FFF',
                                border: '1px solid #dddd',
                                outline: 'none',
                                marginLeft: '15px'

                            }}
                                onClick={SendToDb}>
                                ذخیره
                            </button>

                            <button style={{
                                backgroundColor: '#00d25b',
                                height: '54px',
                                width: '124px',
                                borderRadius: '8px',
                                fontSize: '16px',
                                color: '#FFF',
                                border: 'none',
                                outline: 'none'

                            }}>انتشار محصول</button>

                        </div>
                    </div>
                    <div className='row gx-3 justify-content-between'>
                        <div className='col-lg-8' >
                            <div className='container info-product' style={{ borderLeft: '1px solid #c1c1c1' }}>
                                <div className='container'>
                                    <h5 className='mb-4'> اطلاعات پایه </h5>
                                    <form className='form row'>

                                        <div className='col-lg-6'>
                                            <label for='nameproduct' className='mt-2'> عنوان محصول</label>
                                            <input onChange={(event) => Settitle(event.target.value)} value={title} name='nameproduct' type='text' className=' mt-2' />
                                        </div>
                                        <div className='col-lg-6'>
                                            <label className='mt-2' for='price-product'>قیمت محصول</label>
                                            <input id='price-product' onChange={(event) => Setprice(event.target.value)} value={price} type='text' />
                                        </div>
                                        <div className='col-12'>

                                            <label className='mt-2' for='desc'>توضیحات محصول</label>
                                            <textarea name='desc' onChange={(event) => setdescribe(event.target.value)} value={describe} className='form-control  mt-4 ' style={{ height: '200px' }} />

                                        </div>
                                        <h6 className='mb-3 mt-3'>تصاویر گالری </h6>
                                        <div className='col-12 d-flex mb-4'>
                                            <br />
                                            <img src='/img/652d2058eb21a6b54f510f81.jpg' width='60px' height='60px' />
                                            <div className='box-add-image'>
                                                <div className='plus-icon'>
                                                    <i class="fa-solid fa-plus"></i>
                                                </div>

                                            </div>
                                        </div>
                                        <h6 className='mb-3'>مشخصات فنی </h6>
                                        <div className='col-lg-6'>

                                            <label >پردازنده</label>
                                            <input value={cpu} onChange={(event) => SetCpu(event.target.value)} type='' />
                                        </div>
                                        <div className='col-lg-6'>
                                            <label >نمایشگر</label>
                                            <input type='' />
                                        </div>
                                        <div className='col-lg-6'>
                                            <label >حافظه داخلی</label>
                                            <input type='' />
                                        </div>
                                        <div className='col-lg-6'>

                                            <label >رم</label>
                                            <input onChange={(event) => SetRam(event.target.value)} type='' />
                                        </div>
                                        <div className='col-lg-6'>
                                            <label >شبکه</label>
                                            <input type='' />
                                        </div>
                                        <div className='col-lg-6'>
                                            <label >ابعاد</label>
                                            <input type='' />
                                        </div>
                                        <div className='col-12'>
                                            <label>
                                                ویژگی‌های خاص
                                            </label>
                                            <textarea name='desc' className='form-control  ' style={{ height: '100px' }} />
                                        </div>
                                    </form>

                                </div>

                            </div>


                        </div>
                        <div className='col-lg-4'>
                            <div className='container'>
                                <div className='preview-product'>
                                    <h4>پیشنمایش زنده</h4>
                                    <br />
                                    <div className='card text-center '>

                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            textAlign: 'center',
                                            marginTop: '41px'

                                        }}>
                                            <input className='form-control' onChange={Filevalidation} type='file' />
                                            <button type='file'>
                                                <img src='/img/2323.png' style={{

                                                    height: '250px',
                                                    borderRadius: '15px'

                                                }} />
                                            </button>
                                        </div>
                                        <div className='card-header' >

                                            <h4 className='card-tilte' style={{ color: 'white', fontSize: '18px' }}>{title}</h4>


                                            <h4 className='card-tilte' style={{ color: 'white', fontSize: '18px' }}>{price} تومان</h4>

                                        </div>
                                        <div className='card-body'>

                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>



                </div >

            </section >
        </>


    )
}

export async function getServerSideProps(contex) {


    return {
        props: {
            data: 'res'
        }
    }
}