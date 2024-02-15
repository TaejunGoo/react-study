interface CompanyInfo {
	name: string
	catchPhrase: string
	bs: string
}

interface Geo {
	lat: string
	lng: string
}

interface Address {
	street: string
	suite: string
	city: string
	zipcode: string
	geo: Geo
}

export interface User {
	id: number
	name: string
	username: string
	email: string
	address: Address
	phone: string
	website: string
	company: CompanyInfo
}

export type Product = {
	id: string
	stock: number
	rating: number
	name: string
	description: string
	price: Price
	isBestSeller: boolean
	leadTime: number
	image?: string
	imageBlur?: string
	discount?: Discount
	usedPrice?: UsedPrice
}

type Price = {
	amount: number
	currency: Currency
	scale: number
}

type Currency = {
	code: string
	base: number
	exponent: number
}

type Discount = {
	percent: number
	expires?: number
}

type UsedPrice = {
	amount: number
	currency: Currency
	scale: number
}
