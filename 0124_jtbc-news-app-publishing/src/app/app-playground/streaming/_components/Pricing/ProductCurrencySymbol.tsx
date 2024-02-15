import { toFormat, type Dinero } from 'dinero.js'

export function ProductCurrencySymbol({ dinero }: { dinero: Dinero<number> }) {
	const dict = {
		GBP: '£',
		EUR: '€',
	}
	let symbol = '$'

	symbol = dict[toFormat(dinero, ({ currency }) => currency.code) as keyof typeof dict]

	switch (toFormat(dinero, ({ currency }) => currency.code)) {
		case 'GBP': {
			symbol = '£'
			break
		}

		case 'EUR': {
			symbol = '€'
			break
		}

		default: {
			symbol = '$'
			break
		}
	}

	return symbol
}
