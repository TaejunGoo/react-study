import { demos } from '@/shared/components/demo/menu'
import HomePageStyled from '@/app/app-playground/HomePage.styled'
import { MenuGroupStyled } from '@/app/app-playground/MenuGroup.styled'

export default function Page() {
	return (
		<HomePageStyled title="Examples">
			{demos.map((section) => (
				<MenuGroupStyled title={section.name} items={section.items} />
			))}
		</HomePageStyled>
	)
}
