import React, { useContext, useEffect, useState } from 'react'
import './App.css'
import BuyersForm from './components/BuyersForm/BuyersForm'
import Buyers from './components/BuyersList/Buyers'
import formatName, {
	formatNameFully,
} from './components/JS_UTILITIES/FormatText'
import Button from './components/UI/Button/Button'
import Card from './components/UI/Card'
import BuyersContext from './store/buyers-context'
import Class from './class'
import Modal from './components/UI/Modals/Modal'

function App() {
	const [showbuyers, setShowBuyers] = useState(false)
	const buyersContext = useContext(BuyersContext)
	const handleBuyers = state => {
		setShowBuyers(prev => {
			if (state === `show`) return true
			if (state === `close`) return false
			return !prev
		})
	}

	function CardyThingy() {
		return (
			<Modal onClose={handleBuyers.bind(null, `close`)}>
				<Card className='card'>
					{buyersContext.buyers.map(buyer => {
						const { name: buyersRawName, product: buyersProduct } = buyer

						const buyerName = formatName(buyersRawName)
						const buyerProductName = formatName(buyersProduct)

						console.log(formatNameFully(buyersRawName))

						return (
							<Buyers
								key={buyer.id}
								id={buyer.id}
								name={buyerName}
								product={buyerProductName}
							/>
						)
					})}
				</Card>
			</Modal>
		)
	}
	useEffect(() => {
		handleBuyers()
	}, [])
	return (
		<div className='App-header'>
			<main>
				<Card>
					<BuyersForm showBuyers={handleBuyers} />
				</Card>
				<Card>
					<Button onClick={handleBuyers}>SHow Buyers</Button>

					{showbuyers && buyersContext.buyers.length > 0 && <CardyThingy />}
				</Card>
				<Class now={`lkjs`} />

				{React.createElement(
					`div`,
					null,
					React.createElement(
						`h2`,
						{ className: `thing` },
						`alsdjflkadsjflkasjdflkajdslkfjaslkfdj`
					),
					React.createElement(`h5`, { label: `none` }, `thing`)
				)}
			</main>
		</div>
	)
}

export default App
