import {createCanvas, loadImage} from "canvas"
import {getImageBase64} from "@/utils/getImageBase64.ts"

export const getLogo = async (companyUrl: string): Promise<string | null> => {
  const imageBase64 =
    await getImageBase64(`https://logo.clearbit.com/${companyUrl}`).catch(() => null)

  if (imageBase64 === null) {
    return null
  }

  const image = await loadImage(imageBase64)
  const canvas = createCanvas(image.width, image.height)
  const ctx = canvas.getContext("2d")
  ctx.drawImage(image, 0, 0)

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
  const data = imageData.data

  const dimensions = {minX: canvas.width, minY: canvas.height, maxX: 0, maxY: 0}

  for (let y = 0; y < canvas.height; y++) {
    for (let x = 0; x < canvas.width; x++) {
      const index = (y * canvas.width + x) * 4
      const r = data[index]
      const g = data[index + 1]
      const b = data[index + 2]
      const a = data[index + 3]

      if (a !== 0 && (r !== 255 || g !== 255 || b !== 255)) {
        dimensions.minX = Math.min(dimensions.minX, x)
        dimensions.minY = Math.min(dimensions.minY, y)
        dimensions.maxX = Math.max(dimensions.maxX, x)
        dimensions.maxY = Math.max(dimensions.maxY, y)
      }
    }
  }

  const croppedWidth = dimensions.maxX - dimensions.minX + 1
  const croppedHeight = dimensions.maxY - dimensions.minY + 1

  const croppedCanvas = createCanvas(croppedWidth, croppedHeight)
  const croppedCtx = croppedCanvas.getContext("2d")
  croppedCtx.drawImage(canvas, -dimensions.minX, -dimensions.minY)

  return croppedCanvas.toDataURL()
}
