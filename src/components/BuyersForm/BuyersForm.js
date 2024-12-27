import { useContext, useRef } from 'react'
import BuyersContext from '../../store/buyers-context'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import './BuyersForm.css'

export default function BuyersForm(props) {
	const buyerContext = useContext(BuyersContext)
	const buyerRef = useRef()
	const productRef = useRef()
	function handleFormSubmittion(e) {
		e.preventDefault()
		if (buyerRef.current.current.value.trim().length === 0)
			return buyerRef.current.focus()
		if (productRef.current.current.value.trim().length === 0)
			return productRef.current.focus()

		const buyer = {
			name: buyerRef.current.current.value,
			product: productRef.current.current.value,
			id: (Math.random().toFixed(2) * 33).toString(),
		}
		buyerContext.addBuyer(buyer)
		buyerRef.current.current.value = ``
		productRef.current.current.value = ``
		props.showBuyers(`show`)
	}
	return (
		<form className='flex' onSubmit={handleFormSubmittion}>
			<Input ref={buyerRef} type='text' placeholder='enter buyer' />
			<Input ref={productRef} type='text' placeholder='enter product' />
			<Button type='submit'>Submit</Button>
		</form>
	)
}
