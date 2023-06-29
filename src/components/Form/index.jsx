import { useState } from 'react'

export default function Form() {
  const [valueInput, setValueInput] = useState('')

  return (
    <div>
      <div>
        <form>
          <input
            value={valueInput}
            type="text"
            onChange={(e) => setValueInput(e.target.value)}
          />
          <button>click</button>
        </form>
      </div>
    </div>
  )
}
