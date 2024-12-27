import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import BuyersProvider from './store/buyers-provider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<BuyersProvider>
			<App />
		</BuyersProvider>
	</React.StrictMode>
)
