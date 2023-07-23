import React, {JSX} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IIconProps {
    className?: string,
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

const Icon: React.FC<IIconProps> = (props: IIconProps): JSX.Element => {
    const {className,
        Svg,
    } = props;
    return (
        <Svg className={classNames(cls.Icon, {}, [className])} />
    );
};

export default Icon;


