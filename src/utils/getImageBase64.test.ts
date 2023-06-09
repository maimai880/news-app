import {getImageBase64} from "./getImageBase64"
import dummyImage from "@/test/assets/dummy_image.png"

global.fetch = vi.fn()
const mockedFetch = fetch as jest.Mock

describe("getImageBase64", () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it("正常な画像URLが与えられた場合正しいBase64形式の文字列が返される", async () => {
    mockedFetch.mockResolvedValue({arrayBuffer: () => dummyImage, headers: {get: () => "image/png"}})

    const result = await getImageBase64("test.com")

    expect(result).toMatch(/^data:image\/png;base64,/)
  })

  it("存在しない画像URLが与えられた場合適切なエラーがスローされる", async () => {
    mockedFetch.mockRejectedValue(new Error("Failed to fetch image"))

    expect(getImageBase64("invalid.com")).rejects.toThrow(/^Failed to fetch image: Error: Failed to fetch image$/)
  })

  it("サポートされていないコンテンツタイプのURLが与えられた場合適切なエラーがスローされる", async () => {
    mockedFetch.mockResolvedValue({data: "invalid", headers: {get: () => "text/invalid"}})

    expect(getImageBase64("invalid.com")).rejects.toThrow(/^Unsupported content type: text\/invalid$/)
  })
})
