export const containsHtmlTag = (str: string): boolean => {
	const htmlTagPattern: RegExp = /<[^>]*>/

	return htmlTagPattern.test(str)
}
