
import { useRouter } from "next/router"
import { useEffect, useState } from "react"


export default function index() {
    const router = useRouter('')
    const { product } = router.query
    let [ListProduct, SetProducts] = useState('')
    useEffect(() => {
        let ShowProduct = async () => {
            const response = await fetch('http://localhost:3000/api/products');
            const json = await response.json();
            let result = json.data.filter(item => item.type == product)
            SetProducts(result);
        }
        ShowProduct()

    })
    console.log(ListProduct)
    console.log(product)
    return (
        <div className='phone-category'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 text-center'>
                        <div className='side-mobile'>
                            <div className='item-paramtr'>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Accordion Item #1
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingTwo">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Accordion Item #2
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingThree">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Accordion Item #3
                                            </button>
                                        </h2>
                                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-9'>
                        <div className='content-list'>
                            <div className='row justify-content-between'>



                                {Object.entries(ListProduct).map(item => {
                                    return <div className='col-lg-3 col-6 text-center mt-4'>
                                        <div className='content-item'>
                                            <div className='card'>
                                                <div className='card-img'><img src={item['1'].IMG} className='img-fluid' /></div>
                                                <div className='card-title'>
                                                    {item['1'].title}
                                                </div>
                                                <div className='card-footer'>
                                                    <span>   {item['1'].price}</span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                })}

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
