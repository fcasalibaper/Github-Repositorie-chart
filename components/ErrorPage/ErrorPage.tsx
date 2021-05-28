import Link from 'next/link';
import { Grid } from '@styles/grid.styled';
import { ErrorStyled } from "./ErrorPage.styled";
// import useMessage from './useMessage.hook';

type ErrorPageProps = {
	status?: string,
	link?: string,
}

const ErrorPage = ({ status, link } : ErrorPageProps ) => {
	//const [title, subtitle] = useMessage(status);
	
	return (
		<ErrorStyled
			colSize={12}
			xAlign={"center"}
			yAlign={"center"}
			style={{ height: '100vh' }}
		>	
			<Grid colSize={12} xAlign={"center"} yAlign={"center"} direction={"column"}>
				<h2>Error {status}</h2>
				<Link href={link !== undefined ? link : "/"}>
					<a>Volver a la home</a>
				</Link>
			</Grid>
		</ErrorStyled>
	);
}

export default ErrorPage
