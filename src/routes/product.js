const express = require("express");
const router = express.Router();
const productController = require("../controllers/product");
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/image/product');
    },
    filename: function (req, file, cb) {
        const originalname = file.originalname;
        cb(null, `${originalname}`);
    },
});

router.post("/product", productController.create);

router.get("/product", productController.findAll);

router.get("/product/:id", productController.findOne);

router.put("/product/:id", productController.update);

router.delete("/product/:id", productController.delete);

router.get("/product/search/:name", productController.search);


const upload = multer({ storage: storage })
router.post("/product/upload", upload.single('image'), productController.upload);

module.exports = router;
