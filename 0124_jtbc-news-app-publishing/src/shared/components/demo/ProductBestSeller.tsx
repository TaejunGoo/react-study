'use client'

import styled from '@emotion/styled'

const ProductBestSellerStyled = styled('div')`
	border-radius: 0.25rem;
	background-color: ${({ theme }) => theme.color.gray600};
	padding-left: 0.375rem;
	padding-right: 0.375rem;
	font-size: 0.75rem;
	line-height: 1rem;
	font-weight: 500;
	line-height: 1.25rem;
	color: ${({ theme }) => theme.color.white};
`

export function ProductBestSeller() {
	return <ProductBestSellerStyled>Best Seller</ProductBestSellerStyled>
}
