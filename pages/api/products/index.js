import connectDB from '@/utils/db';
import Product from '@/models/Product';

export default async function handler(req, res) {
  await connectDB();
  
  try {
    switch (req.method) {
      case 'GET':
        // دریافت همه محصولات
        const products = await Product.find({}).sort({ createdAt: -1 });
        return res.status(200).json({ success: true, data: products });
      
      case 'POST':
        // ایجاد محصول جدید
        const product = await Product.create(req.body);
        return res.status(201).json({ success: true, data: product, message: 'محصول با موفقیت ایجاد شد' });
      
      case 'PUT':
        // ویرایش محصول
        const { id, ...updateData } = req.body;
        const updated = await Product.findByIdAndUpdate(id, updateData, { new: true });
        if (!updated) {
          return res.status(404).json({ success: false, message: 'محصول یافت نشد' });
        }
        return res.status(200).json({ success: true, data: updated, message: 'محصول با موفقیت ویرایش شد' });
      
      case 'DELETE':
        // حذف محصول
        const { id: deleteId } = req.body;
        const deleted = await Product.findByIdAndDelete(deleteId);
        if (!deleted) {
          return res.status(404).json({ success: false, message: 'محصول یافت نشد' });
        }
        return res.status(200).json({ success: true, message: 'محصول با موفقیت حذف شد' });
      
      default:
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
}
