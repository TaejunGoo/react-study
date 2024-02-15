import { useSelectedLayoutSegment } from 'next/navigation'
import Link from 'next/link'
import styled from '@emotion/styled'
import { type Item } from '@/shared/components/demo/menu'

const NavItemStyled = styled(Link)`
	/* hover:text-gray-300 */
	display: block;
	border-radius: 0.375rem;
	padding-left: 0.75rem;
	padding-right: 0.75rem;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	font-size: 0.875rem;
	line-height: 1.25rem;
	font-weight: 500;

	&:hover {
		color: ${({ theme }) => theme.color.gray300};
	}

	&:not(.active) {
		color: ${({ theme }) => theme.color.gray400};
		&:hover {
			background-color: ${({ theme }) => theme.color.gray800};
		}
	}

	&.active {
		color: ${({ theme }) => theme.color.white};
	}
`

export function NavItem({ item, close }: { item: Item; close: () => false | void }) {
	const segment = useSelectedLayoutSegment()
	const isActive = item.slug === segment

	return (
		<NavItemStyled
			onClick={close}
			href={`/app-playground/${item.slug}`}
			className={isActive ? 'active' : ''}>
			{item.name}
		</NavItemStyled>
	)
}
