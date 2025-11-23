import { useState } from 'react';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';

export default function NewProduct() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    category: '',
    description: '',
    cpu: '',
    ram: '',
    Storage: '',
    Display: '',
    Camera: '',
    battery: '',
    IMG: '',
    type: 'phone'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.success) {
        await Swal.fire({
          title: 'موفق!',
          text: data.message,
          icon: 'success',
          confirmButtonText: 'باشه'
        });
        router.push('/admin/products');
      } else {
        Swal.fire('خطا!', data.message, 'error');
      }
    } catch (error) {
      Swal.fire('خطا!', 'مشکلی در ایجاد محصول پیش آمد', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>افزودن محصول جدید</h2>
        <button onClick={() => router.back()} className="btn btn-secondary">
          <i className="fa-solid fa-arrow-right me-2"></i>
          بازگشت
        </button>
      </div>

      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">عنوان محصول *</label>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">قیمت (تومان) *</label>
                <input
                  type="number"
                  name="price"
                  className="form-control"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">دسته‌بندی *</label>
                <input
                  type="text"
                  name="category"
                  className="form-control"
                  value={formData.category}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">نوع محصول *</label>
                <select
                  name="type"
                  className="form-control"
                  value={formData.type}
                  onChange={handleChange}
                  required
                >
                  <option value="phone">گوشی</option>
                  <option value="mac">مک بوک</option>
                  <option value="watch">ساعت هوشمند</option>
                  <option value="ipad">آیپد</option>
                  <option value="airpod">ایرپاد</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">پردازنده</label>
                <input
                  type="text"
                  name="cpu"
                  className="form-control"
                  value={formData.cpu}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">رم</label>
                <input
                  type="text"
                  name="ram"
                  className="form-control"
                  value={formData.ram}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">حافظه</label>
                <input
                  type="text"
                  name="Storage"
                  className="form-control"
                  value={formData.Storage}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">صفحه نمایش</label>
                <input
                  type="text"
                  name="Display"
                  className="form-control"
                  value={formData.Display}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">دوربین</label>
                <input
                  type="text"
                  name="Camera"
                  className="form-control"
                  value={formData.Camera}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">باتری</label>
                <input
                  type="text"
                  name="battery"
                  className="form-control"
                  value={formData.battery}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-12 mb-3">
                <label className="form-label">آدرس تصویر</label>
                <input
                  type="text"
                  name="IMG"
                  className="form-control"
                  value={formData.IMG}
                  onChange={handleChange}
                  placeholder="/img/product.png"
                />
              </div>

              <div className="col-md-12 mb-3">
                <label className="form-label">توضیحات</label>
                <textarea
                  name="description"
                  className="form-control"
                  rows="4"
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            <div className="text-end">
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2"></span>
                    در حال ذخیره...
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-save me-2"></i>
                    ذخیره محصول
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
