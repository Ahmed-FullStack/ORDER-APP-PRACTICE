import React, { useImperativeHandle, useRef } from 'react'
function Input(props, ref) {
	const inputRef = useRef()

	useImperativeHandle(
		ref,
		() => {
			return {
				current: inputRef.current,
				focus: () => {
					inputRef.current.focus()
				},
			}
		},
		[]
	)
	return (
		<input
			ref={inputRef}
			type={props.type}
			placeholder={props.placeholder}
			disabled={props.disabled}
		/>
	)
}

export default React.forwardRef(Input)
