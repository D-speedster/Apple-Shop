import { useState } from 'react';

export default function ImageUpload({ onImageSelect, currentImage }) {
  const [preview, setPreview] = useState(currentImage || '');
  const [uploading, setUploading] = useState(false);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // بررسی نوع فایل
    if (!file.type.startsWith('image/')) {
      alert('لطفا فقط فایل تصویری انتخاب کنید');
      return;
    }

    // بررسی حجم فایل (حداکثر 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('حجم فایل نباید بیشتر از 5 مگابایت باشد');
      return;
    }

    // نمایش پیش‌نمایش
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target.result);
    };
    reader.readAsDataURL(file);

    // شبیه‌سازی آپلود
    setUploading(true);
    setTimeout(() => {
      const imagePath = `/img/${file.name}`;
      onImageSelect(imagePath);
      setUploading(false);
    }, 1000);
  };

  const handleUrlInput = (url) => {
    setPreview(url);
    onImageSelect(url);
  };

  return (
    <div className="image-upload-container">
      <div className="row">
        <div className="col-md-6">
          <label className="form-label">آپلود تصویر</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleFileSelect}
            disabled={uploading}
          />
          <small className="form-text" style={{ color: '#6a7291' }}>
            حداکثر حجم: 5MB | فرمت‌های مجاز: JPG, PNG, WEBP
          </small>
        </div>
        
        <div className="col-md-6">
          <label className="form-label">یا آدرس تصویر</label>
          <input
            type="text"
            className="form-control"
            placeholder="/img/product.png"
            value={preview}
            onChange={(e) => handleUrlInput(e.target.value)}
          />
        </div>
      </div>

      {/* پیش‌نمایش */}
      {preview && (
        <div className="mt-3">
          <p style={{ color: '#6a7291' }}>پیش‌نمایش:</p>
          <div className="position-relative" style={{ display: 'inline-block' }}>
            {uploading && (
              <div 
                className="position-absolute top-50 start-50 translate-middle"
                style={{ zIndex: 10 }}
              >
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">در حال آپلود...</span>
                </div>
              </div>
            )}
            <img 
              src={preview} 
              alt="Preview" 
              style={{ 
                maxWidth: '200px', 
                borderRadius: '8px', 
                border: '2px solid #3c3e4d',
                opacity: uploading ? 0.5 : 1
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <p style={{ display: 'none', color: '#e72323' }}>تصویر یافت نشد</p>
          </div>
        </div>
      )}
    </div>
  );
}
