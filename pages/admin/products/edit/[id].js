import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import ImageUpload from '@/components/admin/ImageUpload';

export default function EditProduct() {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
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

  useEffect(() => {
    if (!id) return;
    
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json();
        
        if (data.success) {
          setFormData(data.data);
        } else {
          Swal.fire('خطا!', 'محصول یافت نشد', 'error');
          router.push('/admin/products');
        }
      } catch (error) {
        Swal.fire('خطا!', 'مشکلی در دریافت اطلاعات پیش آمد', 'error');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch('/api/products', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, ...formData })
      });

      const data = await res.json();

      if (data.success) {
        await Swal.fire({
          title: 'موفق!',
          text: 'محصول با موفقیت ویرایش شد',
          icon: 'success',
          confirmButtonText: 'باشه'
        });
        router.push('/admin/products');
      } else {
        Swal.fire('خطا!', data.message, 'error');
      }
    } catch (error) {
      Swal.fire('خطا!', 'مشکلی در ویرایش محصول پیش آمد', 'error');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">در حال بارگذاری...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>ویرایش محصول</h2>
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
                <select
                  name="category"
                  className="form-control"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">انتخاب کنید</option>
                  <option value="iPhone 15 Pro Max">iPhone 15 Pro Max</option>
                  <option value="iPhone 15 Pro">iPhone 15 Pro</option>
                  <option value="iPhone 15">iPhone 15</option>
                  <option value="iPhone 14">iPhone 14</option>
                  <option value="MacBook Pro">MacBook Pro</option>
                  <option value="MacBook Air">MacBook Air</option>
                  <option value="Apple Watch Ultra">Apple Watch Ultra</option>
                  <option value="Apple Watch Series 9">Apple Watch Series 9</option>
                  <option value="iPad Pro">iPad Pro</option>
                  <option value="iPad Air">iPad Air</option>
                  <option value="AirPods Pro">AirPods Pro</option>
                  <option value="AirPods Max">AirPods Max</option>
                </select>
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
                <label className="form-label">
                  پردازنده 
                  <small className="text-muted ms-1">(اختیاری)</small>
                </label>
                <input
                  type="text"
                  name="cpu"
                  className="form-control"
                  value={formData.cpu || ''}
                  onChange={handleChange}
                  placeholder="مثال: Apple A17 Pro"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">
                  رم 
                  <small className="text-muted ms-1">(اختیاری)</small>
                </label>
                <input
                  type="text"
                  name="ram"
                  className="form-control"
                  value={formData.ram || ''}
                  onChange={handleChange}
                  placeholder="مثال: 8GB"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">
                  حافظه 
                  <small className="text-muted ms-1">(اختیاری)</small>
                </label>
                <input
                  type="text"
                  name="Storage"
                  className="form-control"
                  value={formData.Storage || ''}
                  onChange={handleChange}
                  placeholder="مثال: 256GB"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">
                  صفحه نمایش 
                  <small className="text-muted ms-1">(اختیاری)</small>
                </label>
                <input
                  type="text"
                  name="Display"
                  className="form-control"
                  value={formData.Display || ''}
                  onChange={handleChange}
                  placeholder="مثال: 6.7 اینچ Super Retina XDR"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">
                  دوربین 
                  <small className="text-muted ms-1">(اختیاری)</small>
                </label>
                <input
                  type="text"
                  name="Camera"
                  className="form-control"
                  value={formData.Camera || ''}
                  onChange={handleChange}
                  placeholder="مثال: 48MP + 12MP"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">
                  باتری 
                  <small className="text-muted ms-1">(اختیاری)</small>
                </label>
                <input
                  type="text"
                  name="battery"
                  className="form-control"
                  value={formData.battery || ''}
                  onChange={handleChange}
                  placeholder="مثال: 4422 میلی‌آمپر"
                />
              </div>

              <div className="col-md-12 mb-3">
                <ImageUpload 
                  onImageSelect={(imagePath) => setFormData(prev => ({ ...prev, IMG: imagePath }))}
                  currentImage={formData.IMG}
                />
              </div>

              <div className="col-md-12 mb-3">
                <label className="form-label">
                  توضیحات 
                  <small className="text-muted ms-1">(اختیاری)</small>
                </label>
                <textarea
                  name="description"
                  className="form-control"
                  rows="4"
                  value={formData.description || ''}
                  onChange={handleChange}
                  placeholder="توضیحات کامل محصول را وارد کنید..."
                ></textarea>
              </div>
            </div>

            <div className="text-end">
              <button type="submit" className="btn btn-primary" disabled={saving}>
                {saving ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2"></span>
                    در حال ذخیره...
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-save me-2"></i>
                    ذخیره تغییرات
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
