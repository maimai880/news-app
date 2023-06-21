import {cleanup, fireEvent, render, screen} from "@testing-library/react"
import {Header} from "./Header"
import {AppProvider} from "@/providers/app.tsx"
import {useMediaQuery} from "@mui/material"

vi.mock("@mui/material", async () => {
  const actual = await vi.importActual("@mui/material") as object

  return {
    ...actual,
    useMediaQuery: vi.fn(),
  }
})
const mockedUseMediaQuery = useMediaQuery as jest.Mock

describe("Header", () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })
  afterEach(cleanup)

  it("Headerが正しくレンダリングされる", () => {
    render(<Header/>)

    expect(screen.getByRole("banner")).toBeInTheDocument()
    expect(screen.getByRole("heading", {name: "NEWS APP"})).toBeInTheDocument()
    expect(screen.getByTestId("SearchBar")).toBeInTheDocument()
    expect(screen.getByRole("button", {name: "Country"})).toBeInTheDocument()
  })

  // styleのテストは不可能
  it("画面サイズによってHeaderが変化する", () => {
    mockedUseMediaQuery.mockReturnValue(true) // 画面がサイズが最小の意（ソースコードでuseMediaQueryが●●以下で使われることに依存している）

    render(<Header/>, {wrapper: AppProvider})

    expect(screen.queryByText("Country")).toBeNull()
    expect(screen.queryByTestId("SearchBar")).toBeNull()
    expect(screen.getByTestId("SearchIcon")).toBeInTheDocument()
  })

  it("searchIconボタンとArrowBackIconボタンでヘッダーが切り替わる", () => {
    mockedUseMediaQuery.mockReturnValue(true) // 画面がサイズが最小の意（ソースコードでuseMediaQueryが●●以下で使われることに依存している）

    render(<Header/>, {wrapper: AppProvider})
    fireEvent.click(screen.getByTestId("SearchIcon"))

    expect(screen.getByTestId("ArrowBackIcon")).toBeInTheDocument()

    fireEvent.click(screen.getByTestId("ArrowBackIcon"))

    expect(screen.queryByTestId("ArrowBackIcon")).toBeNull()
  })
})
