import styles from './Card.module.css'
export default function Card(props) {
	let className = `${styles.card}${
		props.className ? ` ${props.className}` : ''
	}`
	return <div className={className}>{props.children}</div>
}
