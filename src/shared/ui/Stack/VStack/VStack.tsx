import React, {JSX} from 'react';
import Flex from '../Flex';
import IFlexProps from '../Flex/types/IFlexProps';

type IVStackProps = Omit<IFlexProps, 'direction'>

const VStack: React.FC<IVStackProps> = (props: IVStackProps): JSX.Element => {
    const {align = 'start'} = props;

    return (
        <Flex {...props} direction={'column'} align={align}/>

    );
};

export default VStack;


