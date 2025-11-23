import { useState, useEffect } from 'react';
import Link from 'next/link';
import Swal from 'sweetalert2';

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 10;

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

  // فیلتر محصولات بر اساس جستجو
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // محاسبه pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

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
        <h2>مدیریت محصولات ({filteredProducts.length})</h2>
        <Link href="/admin/products/new" className="btn btn-primary">
          <i className="fa-solid fa-plus me-2"></i>
          افزودن محصول جدید
        </Link>
      </div>

      {/* جستجو */}
      <div className="mb-3">
        <input
          type="search"
          className="form-control"
          placeholder="جستجو در محصولات..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          style={{ maxWidth: '400px' }}
        />
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
            {currentProducts.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center">
                  {searchTerm ? 'نتیجه‌ای یافت نشد' : 'محصولی یافت نشد'}
                </td>
              </tr>
            ) : (
              currentProducts.map(product => (
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

      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="mt-4">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button 
                className="page-link" 
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                قبلی
              </button>
            </li>
            
            {[...Array(totalPages)].map((_, index) => (
              <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                <button 
                  className="page-link" 
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button 
                className="page-link" 
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                بعدی
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
