import { useContext } from 'react'
import BuyersContext from '../../store/buyers-context'
import Button from '../UI/Button/Button'
import './Buyers.css'

export default function Buyers(props) {
	const buyersContext = useContext(BuyersContext)
	function handleBuyerDelete(e) {
		buyersContext.deleteBuyer(props.id)
	}
	return (
		<div className='buyers'>
			<h3>
				{props.name}
				<span> bought {props.product}</span>
			</h3>
			<Button onClick={handleBuyerDelete}>Delete</Button>
		</div>
	)
}
