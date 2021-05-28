import { pxs } from '@styles/breakpoints.styled';
import { Fragment, ReactNode } from 'react';
import useMatchMedia from 'react-use-match-media';

type BreakProps = {
	children: ReactNode,
	breakpoint?: string
	min?: string
	max?: string
}
export const GreaterThan = ({children, breakpoint = 'sm'} : BreakProps) => {
	const width = pxs[breakpoint] + 1;
	const matched = useMatchMedia("(min-width: "+ width +"px)");
	
	return <Fragment>{matched && children}</Fragment>
}

export const LessThan = ({children, breakpoint = 'sm'} : BreakProps) => {
	const width = pxs[breakpoint] - 1;
	const matched = useMatchMedia("(max-width: "+ width +"px)");

	return <Fragment>{matched && children}</Fragment>
}

export const Beetween = ({children, min = 'sm', max = 'md'} : BreakProps) => {
	const minwidth = pxs[min] + 1;
	const maxwidth = pxs[max] - 1;
	const matched = useMatchMedia("(min-width: "+ minwidth +"px) and (max-width: "+ maxwidth +"px)");

	return <Fragment>{matched && children}</Fragment>
}

// usage: 
// return {
// 	<Fragment>
// 		<GreaterThan breakpoint={'sm'}>a/GreaterThan>
// 		<LessThan breakpoint={'sm'}>b/LessThan>
//		<Beetween min={'sm'} max={'md'}>c</Beetween>
// 	</Fragment>
// }