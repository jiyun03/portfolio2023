import ReactDOM from 'react-dom'
import Dimmed from 'components/common/Dimmed'

export default function Portal({ children, dimmed }) {
  const root = document.getElementById('portal')
  return ReactDOM.createPortal(<Dimmed click={dimmed}>{children}</Dimmed>, root)
}
