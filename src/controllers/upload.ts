import { RequestHandler } from "express";
import sharp from "sharp";
import { v4 } from "uuid";
import fs from 'node:fs/promises';

export const upload: RequestHandler = async (req, res) => {

    if (req.file) {
        const newName = v4() + '.jpg';


        const image = await sharp(req.file.path)
            .resize(1280, 720, { fit: "cover" })
            .toBuffer();

        const finalImage = await sharp(image)
        .composite([
            {
                input: "./src/assets/logoMBLIVRE.png"
            }
        ])
            .toFile("./public/images/" + newName);

        const thumbImage = await sharp(image)
            .resize(200)
            .toFile("./public/images/thumbs-" + newName);

        await fs.unlink(req.file.path); // Remove o arquivo temporário após o processamento

    } else {
        console.log("Arquivo não encontrado");
    }


    res.json({});
}
