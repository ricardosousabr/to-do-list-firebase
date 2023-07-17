import Form from '../src/components/Form'
import List from '../src/components/List/index'

export default function Home() {
  return (
    <div>
      <div>
        <h1>Adicionar usuario</h1>
      </div>
      <div>
        <Form />
      </div>
      <div>
        <List />
      </div>
    </div>
  )
}