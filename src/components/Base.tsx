import * as React from 'react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider, createTheme, lightThemePrimitives } from 'baseui';

import theme from './pages/theme';
import Routes from './Routes';

const myTheme = createTheme({ ...lightThemePrimitives }, { ...theme });

const Base: React.FC = () => {
	const engine = new Styletron();
	return (
		<StyletronProvider value={engine}>
			<BaseProvider theme={myTheme}>
				<Routes />
			</BaseProvider>
		</StyletronProvider>
	);
};

export default Base;
