import { RequestHandler } from "express";
import sharp from "sharp";
import { v4 } from "uuid";
import fs from 'node:fs/promises';

export const upload: RequestHandler = async (req, res) => {

    if (req.file) {
        const newName = v4() + '.jpg';
        const image = await sharp(req.file.path)
        .resize(1280, 720, { fit: "cover" })
        .composite([
            {
                input: './src/assets/logoMBLIVRE.png', gravity: 'centre'
            }
        ])
        .toFormat('jpg')
        .toFile('./public/images/' + newName);

        await fs.unlink(req.file.path); // Remove o arquivo temporário após o processamento

    } else {
        console.log("Arquivo não encontrado");
    }


    res.json({});
}
