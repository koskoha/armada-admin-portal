import * as React from 'react';

import plusIcon from '../../images/plus.png';

class ProfileOverview extends React.Component<{
	title: string;
	onClick?: (arg?: any) => void;
	style?: {};
	icon?: boolean;
}> {
	render() {
		const { title, onClick, icon, style } = this.props;
		return (
			<button className="button" style={style} onClick={onClick}>
				{icon && (
					<div className="btn-icon">
						<img src={plusIcon} />
					</div>
				)}
				<span className="btn-label">{title}</span>
			</button>
		);
	}
}

export default ProfileOverview;
