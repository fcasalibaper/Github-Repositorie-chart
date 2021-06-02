import Link from "next/link";
import { ButtonStyled } from "@styles/general.styles";

interface ButtonProps {
	url: string,
	disabled: boolean
}

const Button = ({url, disabled} : ButtonProps) => {
	const isPrivateText = !disabled ? url.split('/').pop() : 'Private';

	return (
		<Link href={!disabled ? url : "#"} passHref={!disabled ? true : false}>
			<ButtonStyled as="a" target="_blank" disabled={disabled}>
				{ isPrivateText }
			</ButtonStyled>
		</Link>
	);
};

export default Button;