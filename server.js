require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, useUnifiedTopology: true
})
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error(err));

// API chung: GET /api/:collection
app.get('/api/:collection', async (req, res) => {
  const collectionName = req.params.collection;

  try {
    const data = await mongoose.connection.db
      .collection(collectionName)
      .find({})
      .toArray();

    res.status(200).json(data);
  } catch (err) {
    console.error('❌ API error:', err);
    res.status(500).json({ error: 'Lỗi lấy dữ liệu' });
  }
});

app.get('/api/:collection/:id', async (req, res) => {
  const { collection, id } = req.params;

  try {
    const item = await mongoose.connection.db.collection(collection).findOne({ id: id });
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi truy vấn', error });
  }
});

app.get('/api/:collection/:id/related', async (req, res) => {
  const { collection, id } = req.params;

  try {
    const db = mongoose.connection.db;
    const product = await db.collection(collection).findOne({ id: id });

    if (!product) {
      return res.status(404).json({ message: 'Không tìm thấy sản phẩm' });
    }

    const categoryId = product.categoryId;

    const relatedProducts = await db
      .collection(collection)
      .find({
        categoryId: categoryId,
        id: { $ne: id } // loại trừ sản phẩm đang xem
      })
      .toArray();

    res.json(relatedProducts);
  } catch (err) {
    console.error('❌ Lỗi server:', err);
    res.status(500).json({ message: 'Lỗi server', error: err.message });
  }
});




const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
