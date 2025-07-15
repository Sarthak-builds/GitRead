import { Provider } from 'react-redux'
import { Store } from 'lucide-react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
//  <Provider store={Store}>
    <App />

)
