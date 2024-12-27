import React from 'react'

const BuyersContext = React.createContext({
	buyers: [],
	addBuyer: () => {},
	deleteBuyer: () => {},
})

export default BuyersContext
