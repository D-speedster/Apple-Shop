import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

export default function ProductsPage() {
  const router = useRouter();
  const { search, type } = router.query;
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(search || '');
  const [selectedType, setSelectedType] = useState(type || 'all');
  const [sortBy, setSortBy] = useState('newest');

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (search) setSearchTerm(search);
    if (type) setSelectedType(type);
  }, [search, type]);

  useEffect(() => {
    filterAndSortProducts();
  }, [products, searchTerm, selectedType, sortBy]);

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products');
      const data = await res.json();
      if (data.success) {
        setProducts(data.data);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterAndSortProducts = () => {
    let filtered = [...products];

    // فیلتر بر اساس جستجو
    if (searchTerm) {
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // فیلتر بر اساس نوع
    if (selectedType && selectedType !== 'all') {
      filtered = filtered.filter(p => p.type === selectedType);
    }

    // مرتب‌سازی
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default: // newest
        filtered.reverse();
    }

    setFilteredProducts(filtered);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/products?search=${encodeURIComponent(searchTerm)}`);
  };

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">در حال بارگذاری...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>محصولات اپل | فروشگاه Apple</title>
        <meta name="description" content="مشاهده و خرید تمام محصولات اپل" />
      </Head>

      <div className="container mt-5">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">خانه</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              محصولات
            </li>
          </ol>
        </nav>

        <h1 className="mb-4">محصولات اپل</h1>

        {/* فیلترها */}
        <div className="row mb-4">
          <div className="col-md-4 mb-3">
            <form onSubmit={handleSearch}>
              <div className="input-group">
                <input
                  type="search"
                  className="form-control"
                  placeholder="جستجو در محصولات..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ borderRadius: '8px 0 0 8px', border: '1px solid #ddd' }}
                />
                <button className="btn btn-primary" type="submit" style={{ borderRadius: '0 8px 8px 0' }}>
                  <i className="fa-solid fa-search"></i>
                </button>
              </div>
            </form>
          </div>

          <div className="col-md-4 mb-3">
            <select
              className="form-control"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              style={{ border: '1px solid #ddd', borderRadius: '8px' }}
            >
              <option value="all">همه محصولات</option>
              <option value="phone">گوشی موبایل</option>
              <option value="mac">مک بوک</option>
              <option value="watch">ساعت هوشمند</option>
              <option value="ipad">آیپد</option>
              <option value="airpod">ایرپاد</option>
            </select>
          </div>

          <div className="col-md-4 mb-3">
            <select
              className="form-control"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{ border: '1px solid #ddd', borderRadius: '8px' }}
            >
              <option value="newest">جدیدترین</option>
              <option value="price-low">ارزان‌ترین</option>
              <option value="price-high">گران‌ترین</option>
              <option value="name">نام (الفبا)</option>
            </select>
          </div>
        </div>

        {/* نتایج */}
        <div className="mb-3">
          <p style={{ color: '#666' }}>
            {filteredProducts.length} محصول یافت شد
          </p>
        </div>

        {/* لیست محصولات */}
        {filteredProducts.length === 0 ? (
          <div className="empty-state">
            <i className="fa-solid fa-box-open"></i>
            <h3>محصولی یافت نشد</h3>
            <p>لطفا فیلترهای دیگری را امتحان کنید</p>
          </div>
        ) : (
          <div className="row">
            {filteredProducts.map((product) => (
              <div key={product._id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <Link href={`/products/${product._id}`} style={{ textDecoration: 'none' }}>
                  <div className="card h-100" style={{ border: '1px solid #e0e0e0', borderRadius: '12px', overflow: 'hidden' }}>
                    <div className="card-header text-center" style={{ border: 'none', backgroundColor: 'white', padding: '20px' }}>
                      <img
                        src={product.IMG || '/img/placeholder.png'}
                        alt={product.title}
                        style={{ width: '100%', height: '200px', objectFit: 'contain' }}
                        loading="lazy"
                      />
                    </div>
                    <div className="card-body">
                      <h6 className="card-title" style={{ minHeight: '48px', color: '#333' }}>
                        {product.title}
                      </h6>
                      <p style={{ fontSize: '14px', color: '#999', marginBottom: '10px' }}>
                        {product.category}
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span style={{ fontWeight: 'bold', color: '#e72323', fontSize: '18px' }}>
                          {Number(product.price).toLocaleString()} تومان
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
