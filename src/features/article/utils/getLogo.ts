import {createCanvas, loadImage} from "canvas";
import {getImageBase64} from "@/utils/getImageBase64.ts";

export const getLogo = async (companyUrl: string): Promise<string> => {
  const image = await loadImage(await getImageBase64(`https://logo.clearbit.com/${companyUrl}`));
  const canvas = createCanvas(image.width, image.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(image, 0, 0);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  let minX = canvas.width;
  let minY = canvas.height;
  let maxX = 0;
  let maxY = 0;

  for (let y = 0; y < canvas.height; y++) {
    for (let x = 0; x < canvas.width; x++) {
      const index = (y * canvas.width + x) * 4;
      const r = data[index];
      const g = data[index + 1];
      const b = data[index + 2];
      const a = data[index + 3];

      if (a !== 0 && (r !== 255 || g !== 255 || b !== 255)) {
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
      }
    }
  }

  const croppedWidth = maxX - minX + 1;
  const croppedHeight = maxY - minY + 1;

  const croppedCanvas = createCanvas(croppedWidth, croppedHeight);
  const croppedCtx = croppedCanvas.getContext('2d');
  croppedCtx.drawImage(canvas, -minX, -minY);

  return croppedCanvas.toDataURL();
};
