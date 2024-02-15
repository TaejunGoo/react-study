export const condition = (statement: boolean, truthy: () => void, falsy: () => void) => {
	return statement ? truthy() : falsy()
}
