import { RequestHandler } from "express";
import sharp from "sharp";

export const upload: RequestHandler = async (req, res) => {

    if (req.file) {
        const image = await sharp(req.file.path);
        
    } else {
        console.log("Arquivo não encontrado");
    }


    res.json({});
}
