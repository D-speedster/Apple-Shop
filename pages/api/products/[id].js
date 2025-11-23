import connectDB from '@/utils/db';
import Product from '@/models/Product';

export default async function handler(req, res) {
  await connectDB();
  
  const { id } = req.query;
  
  try {
    if (req.method === 'GET') {
      const product = await Product.findById(id);
      
      if (!product) {
        return res.status(404).json({ success: false, message: 'محصول یافت نشد' });
      }
      
      return res.status(200).json({ success: true, data: product });
    }
    
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ success: false, message: error.message });
  }
}
