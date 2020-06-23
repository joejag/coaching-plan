import "@testing-library/jest-dom/extend-expect"
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import React, { useState } from "react"

const TodoApp = () => {
  const [items, setItems] = useState([])
  return (
    <>
      <h1 className="head">Todo</h1>
      <ul>
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      <label htmlFor="thing">New</label>
      <input id="thing" onChange={(e) => setItems([e.target.value])} />
    </>
  )
}

it("lists things Todo", () => {
  const { getByText, getByLabelText } = render(<TodoApp />)

  userEvent.type(getByLabelText("New"), "buy milk")

  expect(getByText("buy milk")).toBeInTheDocument()
})
