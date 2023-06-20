import {getImageBase64} from "@/utils/getImageBase64.ts"
import {getLogo} from "./getLogo.ts"
import {dummyLogo} from "@/test/assets/dummyLogo.ts"
import {croppedDummyLogo} from "@/test/assets/croppedDummyLogo.ts"
import {JSDOM} from "jsdom"

// getImageBase64は個別にテストする
vi.mock("@/utils/getImageBase64.ts")
const mockGetImageBase64 = getImageBase64 as jest.Mock

const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p><canvas id="canvas"></canvas>`)
global.document = dom.window.document

describe("getLogo", () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it("画像の取得に成功した場合DataURLを返す", async () => {
    mockGetImageBase64.mockResolvedValue(dummyLogo)

    const result = await getLogo("test.com")

    expect(result).toMatch(/^data:image\/png;base64,/)
  })

  it("取得した画像の空白部分を削除する", async () => {
    mockGetImageBase64.mockResolvedValue(dummyLogo)

    const result = await getLogo("test.com")

    expect(result).toEqual(croppedDummyLogo)
  })

  it("画像の取得に失敗した場合nullを返す", async () => {
    mockGetImageBase64.mockRejectedValue(new Error("Failed to fetch image"))

    const result = await getLogo("invalid.com")

    expect(result).toBeNull()
  })
})
