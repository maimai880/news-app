import {getArticles} from "./getArticles.ts"
import axios from "axios"

// getLogoは個別でテスト
vi.mock("@/features/article/utils/getLogo.ts", () => ({getLogo: () => null}))

vi.mock("axios", () => {
  return {
    default: {
      post: vi.fn(), get: vi.fn(), delete: vi.fn(), put: vi.fn(),
      create: vi.fn().mockReturnThis(),
      interceptors: {
        request: {use: vi.fn(), eject: vi.fn()},
        response: {use: vi.fn(), eject: vi.fn()},
      },
    },
  }
})
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const mockedAxios = axios as jest.Mocked<typeof axios>

const MOCK_RESPONSE = {
  totalArticles: 1,
  articles: [
    {
      title: "Test Article",
      url: "https://test.com",
      image: "https://test.com/image.jpg",
      source: {
        name: "Test Source",
        url: "https://test.com",
      },
      publishedAt: "2023-06-18T00:00:00Z",
    },
  ],
}

describe("getArticles", async () => {
  beforeEach(() => {
      vi.resetAllMocks()

      vi.stubEnv("VITE_API_URL", "")
      vi.stubEnv("VITE_API_KEY", "")
    }
  )

  it("環境変数で設定したURLにリクエストを送る", async () => {
    vi.stubEnv("VITE_API_URL", "https://test.com")
    mockedAxios.get.mockResolvedValueOnce(MOCK_RESPONSE)

    await getArticles("us", "test")

    expect(mockedAxios.get).toHaveBeenCalledWith("https://test.com", expect.anything())
  })
  it("環境変数でURLが設定されていない場合はGNewsのURLにリクエストを送る", async () => {
    mockedAxios.get.mockResolvedValueOnce(MOCK_RESPONSE)

    await getArticles("us", "test")

    expect(mockedAxios.get).toHaveBeenCalledWith("https://gnews.io/api/v4/top-headlines", expect.anything())
  })

  it("取得した記事を正しい形式で返す", async () => {
    mockedAxios.get.mockResolvedValueOnce(MOCK_RESPONSE)

    const articles = await getArticles("us", "test")

    expect(articles).toEqual([
      {
        title: "Test Article",
        url: "https://test.com",
        imageUrl: "https://test.com/image.jpg",
        companyName: "Test Source",
        companyLogo: null,
        date: new Date("2023-06-18T00:00:00Z"),
      }
    ])
  })

  it("記事の取得に失敗した場合エラーを返す", async () => {
    mockedAxios.get.mockRejectedValueOnce({message: "test error"})

    expect(getArticles("us", "test")).rejects.toThrow(/^Failed to fetch articles: {"message":"test error"}$/)
  })
  it("取得したdataが記事ではなかった場合エラーを返す", async () => {
    mockedAxios.get.mockResolvedValueOnce({message: "test error"})

    expect(getArticles("us", "test")).rejects.toThrow(/^Invalid response data from GNews API: {"message":"test error"}$/)
  })
})
