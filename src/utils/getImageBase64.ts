export const getImageBase64 = async (url: string) => {
  const response = await fetch(url)
  const contentType = response.headers.get('content-type')
  const arrayBuffer = await response.arrayBuffer()
  const base64String = btoa(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    String.fromCharCode.apply(null, new Uint8Array(arrayBuffer))
  );
  return `data:${contentType};base64,${base64String}`
}
