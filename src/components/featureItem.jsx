import Button from './button'

export default function FeatureItem({
	image,
	title,
	text,
	isNewProduct = false,
	textButton,
	className = '',
	imageClassName = '',
}) {
	return (
		<div
			className={`flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-2 lg:px-[10rem] py-16 ${className}`}
		>
			<div className="p-2 flex flex-col justify-center items-center lg:items-start lg:w-1/2 gap-4 md:gap-10">
				<h2 className="text-h2 text-center uppercase">{title}</h2>
				<p className="text-body-m opacity-50 text-center lg:text-right">
					{text}
				</p>
				{isNewProduct && <Button text={textButton} />}
			</div>
			<div
				className={`flex justify-center items-center md:w-[43.0625rem] lg:w-[33.75rem] lg:h-[35rem] rounded-lg ${imageClassName}`}
			>
				<img src={image} />
			</div>
		</div>
	)
}
