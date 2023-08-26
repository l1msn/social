import React, {
    ImgHTMLAttributes,
    JSX,
    memo,
    ReactElement,
    useLayoutEffect,
    useState,
} from 'react';

interface IAppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    fallback?: ReactElement;
    errorFallback?: ReactElement;
}

/**
 * Устаревший\deprecated UI component, используй новый из папки redesigned
 * @deprecated
 */
const AppImage: React.FC<IAppImageProps> = memo(
    (props: IAppImageProps): JSX.Element => {
        const {
            className,
            src,
            alt = 'image',
            errorFallback,
            fallback,
            ...otherProps
        } = props;

        const [isLoading, setIsLoading] = useState<boolean>(true);
        const [hasError, setHasError] = useState<boolean>(false);

        useLayoutEffect(() => {
            const img = new Image();
            img.src = src ?? '';
            img.onload = () => {
                setIsLoading((prevState) => !prevState);
            };
            img.onerror = () => {
                setIsLoading((prevState) => !prevState);
                setHasError((prevState) => !prevState);
            };
        }, [src]);

        if (isLoading && fallback) {
            return fallback;
        }

        if (hasError && errorFallback) {
            return errorFallback;
        }

        return (
            <img alt={alt} src={src} className={className}
{...otherProps} />
        );
    },
);

export default AppImage;
