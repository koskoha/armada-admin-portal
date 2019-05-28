import * as React from 'react';

const UserContext = React.createContext({ authenticated: false, x: 0 });

export default UserContext;
