import React, { JSX } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;

interface IIconPropsBase extends SvgProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

interface IIconPropsNonClickable extends IIconPropsBase {
    clickable?: false;
}

interface IIconPropsClickable extends IIconPropsBase {
    clickable: true;
    onClick: () => void;
}

type IconProps = IIconPropsNonClickable | IIconPropsClickable;

const Icon: React.FC<IconProps> = (props: IconProps): JSX.Element => {
    const {
        className,
        Svg,
        width = 32,
        height = 32,
        clickable,
        ...otherProps
    } = props;

    const icon = (
        <Svg
            {...otherProps}
            width={width}
            height={height}
            className={classNames(cls.Icon, {}, [className])}
            onClick={undefined}
        />
    );

    if (clickable) {
        return (
            <button
                className={cls.button}
                onClick={props.onClick}
                type={'button'}
                style={{ height, width }}
            >
                {icon}
            </button>
        );
    }

    return icon;
};

export default Icon;
