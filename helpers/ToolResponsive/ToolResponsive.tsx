import { useState, useEffect } from 'react';
import { ToolResponsiveCont } from './ToolResponsive.styled';

const ToolResponsive = ({ position }) => {
	const [ state, setState ] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    updateWindowDimensions();
		window.addEventListener('resize', updateWindowDimensions);
		return () => {
			window.removeEventListener('resize', updateWindowDimensions);
		}
  }, []);
  
  const updateWindowDimensions = () => {
    setState({ width: window.innerWidth, height: window.innerHeight });
  }
	return (
		<ToolResponsiveCont position={position}>
			<div className="resolution"></div>
			<span>
				{state.width}px
			</span>
		</ToolResponsiveCont>
	);
};

export default ToolResponsive;
