import SideBar from '@/components/template/Admin/SideBar'
import React from 'react'
import HeaderAdmin from '@/components/template/Admin/HeaderAdmin'


export default function index() {


    return (

        <div className='container-fluid'>
            <div className='main-content'>
                <div className='row justify-content-between'>
                    <div className='col-lg-2 SideBar d-md-block d-lg-block d-none'>
                      
                            <SideBar />
                     

                    </div>
                    <div className='col-lg-10 '>
                        <div className='content'>
                            <HeaderAdmin></HeaderAdmin>
                            
                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}
