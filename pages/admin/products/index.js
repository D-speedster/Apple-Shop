import { useState, useEffect } from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2';

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const res = await fetch('/api/products');
      const data = await res.json();
      if (data.success) {
        setProducts(data.data);
      }
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id) => {
    const result = await Swal.fire({
      title: 'مطمئن هستید؟',
      text: 'این محصول حذف خواهد شد',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'بله، حذف شود',
      cancelButtonText: 'انصراف',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6'
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch('/api/products', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id })
        });

        const data = await res.json();

        if (data.success) {
          Swal.fire('حذف شد!', data.message, 'success');
          loadProducts();
        } else {
          Swal.fire('خطا!', data.message, 'error');
        }
      } catch (error) {
        Swal.fire('خطا!', 'مشکلی در حذف محصول پیش آمد', 'error');
      }
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
        <h2>مدیریت محصولات</h2>
        <Link href="/admin/products/new" className="btn btn-primary">
          <i className="fa-solid fa-plus me-2"></i>
          افزودن محصول جدید
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>تصویر</th>
              <th>عنوان</th>
              <th>قیمت</th>
              <th>دسته‌بندی</th>
              <th>نوع</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center">محصولی یافت نشد</td>
              </tr>
            ) : (
              products.map(product => (
                <tr key={product._id}>
                  <td>
                    <img 
                      src={product.IMG || '/img/placeholder.png'} 
                      width="50" 
                      height="50" 
                      alt={product.title}
                      style={{ objectFit: 'cover', borderRadius: '5px' }}
                    />
                  </td>
                  <td>{product.title}</td>
                  <td>{Number(product.price).toLocaleString()} تومان</td>
                  <td>{product.category}</td>
                  <td>
                    <span className="badge bg-info">{product.type}</span>
                  </td>
                  <td>
                    <Link 
                      href={`/admin/products/edit/${product._id}`}
                      className="btn btn-sm btn-warning me-2"
                    >
                      <i className="fa-solid fa-edit"></i>
                    </Link>
                    <button 
                      onClick={() => deleteProduct(product._id)}
                      className="btn btn-sm btn-danger"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
