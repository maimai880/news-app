import {cleanup, render, screen} from "@testing-library/react"
import {Component} from "@/Component/Component.tsx"
import App from "@/App.tsx"

describe("Compooent", () => {
  afterEach(cleanup)

  it("render Component", () => {
    render(<Component/>)

    screen.debug()
  })

  it("render App", () => {
    render(<App/>) // ここでSearchBarがundefinedになる

    screen.debug()
  })
})
