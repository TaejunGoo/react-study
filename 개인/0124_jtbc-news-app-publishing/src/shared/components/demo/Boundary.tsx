import {
	BadgeStyled,
	BoundaryBadgeStyled,
	BoundaryStyled,
} from '@/shared/components/demo/Boundary.styled'

export type BoundaryProps = React.PropsWithChildren<{
	labels?: string[]
	size?: 'default' | 'small'
	color?: 'default' | 'pink' | 'blue' | 'violet' | 'cyan' | 'orange'
	animateRerendering?: boolean
}>

export function Boundary({
	children,
	labels = ['children'],
	size = 'default',
	color = 'default',
	animateRerendering = true,
}: BoundaryProps) {
	console.log({ labels, animateRerendering })

	return (
		<BoundaryStyled color={color} size={size} animateRerendering={animateRerendering}>
			<BoundaryBadgeStyled size={size}>
				{labels.map((label) => (
					<BadgeStyled key={label} color={color} animateRendering={animateRerendering}>
						{label}
					</BadgeStyled>
				))}
			</BoundaryBadgeStyled>

			{children}
		</BoundaryStyled>
	)
}
