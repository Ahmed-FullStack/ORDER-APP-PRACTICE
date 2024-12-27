import './Button.css'

export default function Button(props) {
	let className = `primary-btn ${props.className ? ` ${props.className}` : ''}`

	return (
		<button className={className} type={props.type} onClick={props.onClick}>
			{props.children}
		</button>
	)
}
