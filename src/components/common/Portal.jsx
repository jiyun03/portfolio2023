import ReactDOM from 'react-dom'

export default function Portal({ children }) {
  const root = document.getElementById('portal')
  return ReactDOM.createPortal(children, root)
}
