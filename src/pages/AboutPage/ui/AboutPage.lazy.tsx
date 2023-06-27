import React from 'react';

const AboutPageLazy = React.lazy(
    () => import('./AboutPage'));

export default AboutPageLazy;
