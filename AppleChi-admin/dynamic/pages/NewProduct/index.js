import React from 'react'

export default function index() {
  return (
    <section className="Box-Information">
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
    <div className="container justify-content-start align-items-start text-start">
      <label htmlFor="">اسم محصول</label>
      <br />
      <input className="form-control" type="text" placeholder="..." />
      <label htmlFor="">سال تولید</label>
      <br />
      <input className="form-control" type="text" placeholder="..." />
      <label htmlFor="">نمایشگر</label>
      <br />
      <input className="form-control" type="text" placeholder="..." />
      <label htmlFor="">پردازنده</label>
      <br />
      <input className="form-control" type="text" placeholder="..." />
      <label htmlFor="" />
      ظرفیت
      <br />
      <input className="form-control" type="text" placeholder="..." />
      <label htmlFor="">توضیحات</label>
      <br />
      <textarea
        name=""
        id=""
        cols={30}
        rows={10}
        className="form-control"
        defaultValue={""}
      />
    </div>
  </div>
</section>

  )
}
