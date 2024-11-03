import React from 'react'

export default function Button({ className, text }) {
	return (
		<button
			className={`${className} px-4 py-2 mt-4 md:ml-4 bg-orange text-white rounded-lg`}
		>
			{text}
		</button>
	)
}
