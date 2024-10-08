import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Toaster position='bottom-center' toastOptions={{ duration: 5000 }} />
    <App />
  </BrowserRouter>,
)
