import multer from "multer";

/*
const diskStorage = multer.diskStorage({
    filename: (req, file, cb) => {
        const prefix = 'img-' + Math.floor(Math.random() * 9999);
        console.log(file);
        cb(null, prefix+'.jpg');
    },
    destination: (req, file, cb) => {
        cb(null, './public/uploads/tmp');
    }
})
*/

/*
const memStorage = multer.memoryStorage();
*/


export const upload = multer({
    dest: "./public/tmp",
});