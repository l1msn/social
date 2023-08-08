import React, {JSX} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IIconProps {
    className?: string,
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>,
    inverted?: boolean
}

const Icon: React.FC<IIconProps> = (props: IIconProps): JSX.Element => {
    const {className,
        Svg,
        inverted = false,
    } = props;
    return (
        <Svg className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])} />
    );
};

export default Icon;


