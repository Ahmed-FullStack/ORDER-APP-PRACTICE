import { useReducer } from 'react'
import BuyersContext from './buyers-context'
const ACTIONS = {
	ADD_BUYER: `ADD_BUYER`,
	DELETE_BUYER: `DELETE_BUYER`,
}
const defaultBuyerState = [
	{
		name: `ahmed ashraf`,
		product: `laptop`,

		id: `easa58`,
	},
	{
		name: 'asad ashraf ali thingys is here',
		product: `iphone`,
		id: `e8923a58`,
	},
	{
		name: `habiba api`,
		product: `guitar`,
		id: `ea538`,
	},
	{
		name: `ahmed ashraf`,
		product: `laptop`,

		id: `ea58`,
	},
	{
		name: 'asad ashraf ali thingys is here',
		product: `iphone`,
		id: `ea5+8`,
	},
	{
		name: `habiba api`,
		product: `guitar`,
		id: `ea5_+8`,
	},
	{
		name: `ahmed ashraf`,
		product: `laptop`,

		id: `ea#$58`,
	},
	{
		name: 'asad ashraf ali thingys is here',
		product: `iphone`,
		id: `ea5#$!8`,
	},
	{
		name: `habiba api`,
		product: `guitar`,
		id: `ea00058`,
	},
]

const buyerReducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.ADD_BUYER: {
			return [...state, action.addBuyer]
		}
		case ACTIONS.DELETE_BUYER: {
			return state.filter(buyer => {
				return buyer.id !== action.deleteBuyer
			})
		}

		default:
			break
	}
}

export default function BuyersProvider(props) {
	const [buyerState, dispatchBuyersAction] = useReducer(
		buyerReducer,
		defaultBuyerState
	)

	function deleteBuyerHandler(deleteBuyer) {
		dispatchBuyersAction({ type: ACTIONS.DELETE_BUYER, deleteBuyer })
	}

	function addBuyerhandler(addBuyer) {
		dispatchBuyersAction({ type: ACTIONS.ADD_BUYER, addBuyer })
	}

	const buyersContextManager = {
		buyers: buyerState,
		addBuyer: addBuyerhandler,
		deleteBuyer: deleteBuyerHandler,
	}
	return (
		<BuyersContext.Provider value={buyersContextManager}>
			{props.children}
		</BuyersContext.Provider>
	)
}
