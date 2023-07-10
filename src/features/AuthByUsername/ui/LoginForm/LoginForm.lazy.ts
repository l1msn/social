import React from 'react';
import ILoginFormProps from './types/ILoginFormProps';

const LoginFormLazy = React.lazy<React.FC<ILoginFormProps>>(
    () => import('./LoginForm'));

export default LoginFormLazy;
