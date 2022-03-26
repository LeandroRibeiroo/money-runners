import Busboy from 'busboy';
import express from 'express';

const router = express.Router();

router.post('/', async (req, res) => {
  var busboy = new Busboy({ headers: req.headers });
  busboy.on('finish', async () => {
    try {
    } catch (error) {
      res.json({ error: true, message: error.message });
    }
  });
  req.pipe(busboy);
});

export default router;
