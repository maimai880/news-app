import {fireEvent, render, screen} from "@testing-library/react"
import App from "./App"
import {ArticleList} from "@/features/article"

vi.mock("@/features/article", async () => {
  const actual = await vi.importActual("@/features/article") as object

  return {
    ...actual,
    ArticleList: vi.fn(() => <ArticleList/>)
  }
})
const mockedArticleList = ArticleList as jest.Mock

describe("App", () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  test("エラー発生時フォールバック画面を表示する", () => {
    mockedArticleList.mockImplementation(() => {
      throw new Error("test error")
    })

    render(<App/>)

    expect(screen.getByText("エラーが発生しました")).toBeInTheDocument()
  })

  test("Countryメニューから国を選択すると見出しが翻訳される", () => {
    render(<App/>)

    expect(screen.getByText("今日のニュース")).toBeInTheDocument()

    fireEvent.click(screen.getByRole("button", {name: "Country"}))
    fireEvent.click(screen.getByRole("menuitem", {name: "USA"}))

    expect(screen.getByText("Today's News")).toBeInTheDocument()
  })
})
