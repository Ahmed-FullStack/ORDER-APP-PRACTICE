import ReactDOM from 'react-dom'
import './Modal.css'
function BackDrop(props) {
	return <div onClick={props.onClose} className='backdrop'></div>
}

function ModalOverlay(props) {
	return <div className='modal'> {props.children}</div>
}

export default function Modal(props) {
	document.addEventListener(`keydown`, e => {
		if (e.key === `Escape`) props.onClose()
	})
	return (
		<>
			{ReactDOM.createPortal(
				<BackDrop onClose={props.onClose} />,
				document.getElementById(`modals`)
			)}
			{ReactDOM.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				document.getElementById(`modals`)
			)}
		</>
	)
}
