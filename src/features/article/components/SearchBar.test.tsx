// エンター押した時と検索ボタン押した時submitされること、何も入力してない時は全部の記事が表示される事、queryを入力した時は検索結果がフィルタリングされることをテストして

import axios from "axios"
import {cleanup, fireEvent, render, screen} from "@testing-library/react"
import {SearchBar} from "./SearchBar"
import {AppProvider} from "@/providers/app.tsx"
import App from "@/App.tsx"

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
const mockedAxios = axios as jest.Mocked<typeof axios>

const MOCK_RESPONSE = {
  totalArticles: 2,
  articles: [
    {title: "1", url: "1", image: "1", source: {name: "1", url: "1"}, publishedAt: "1111-11-11"},
    {title: "2", url: "2", image: "2", source: {name: "2", url: "2"}, publishedAt: "2222-22-22"}
  ],
}

describe("SearchBar", () => {
  afterEach(cleanup)

  it("正しくレンダリングされる", () => {
    render(<SearchBar/>, {wrapper: AppProvider})

    expect(screen.getByTestId("SearchBar")).toBeInTheDocument()
    expect(screen.getByTestId("SearchBar.TextField")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  describe("エンターキーを押した時と検索ボタンを押した時submitされる", () => {
    it("エンターキーを押した時submitされる", () => {
      mockedAxios.get.mockResolvedValueOnce(MOCK_RESPONSE)

      render(<App/>) // ここでSearchBarがundefinedになる
      const input = screen.getByTestId("SearchBar.TextField")

      fireEvent.change(input, {target: {value: "test"}})
      fireEvent.keyDown(input, {key: "Enter"})

      expect(mockedAxios.get).toHaveBeenCalledWith("https://gnews.io/api/v4/top-headlines", expect.anything())
    })
  })
})
