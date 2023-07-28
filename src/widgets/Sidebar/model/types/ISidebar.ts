import React from 'react';

interface ISidebar {
    path: string,
    text: string,
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>,
    authOnly?: boolean;
}


export default ISidebar;
