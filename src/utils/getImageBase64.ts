export const getImageBase64 = async (url: string) => {
  const response = await fetch(url).catch((r) => {
    throw new Error(`Failed to fetch image: ${r}`)
  })

  const contentType = response.headers.get("content-type")
  if (contentType?.startsWith("image/") === false) throw new Error(`Unsupported content type: ${contentType}`)

  const arrayBuffer = await response.arrayBuffer()
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(arrayBuffer)))

  return `data:${contentType};base64,${base64String}`
}
