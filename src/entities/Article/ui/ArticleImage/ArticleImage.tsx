import React, { JSX, memo } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './ArticleImage.module.scss';
import { IArticleImageBlock } from '../../model/types/IArticle';
import { AlignText, Text as DeprecatedText } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ToggleFeatures } from '@/shared/features';
import AppImage from '@/shared/ui/redesigned/AppImage';

interface IArticleImageProps {
    className?: string;
    block: IArticleImageBlock;
}

const ArticleImage: React.FC<IArticleImageProps> = memo(
    ({ className, block }: IArticleImageProps): JSX.Element => {
        const DeprecatedArticleImage = (
            <div className={classNames(cls.article, {}, [className])}>
                <img src={block.src} className={cls.image} alt={block.title} />
                {block.title && (
                    <DeprecatedText
                        title={block.title}
                        align={AlignText.CENTER}
                    />
                )}
            </div>
        );

        const RedesignedArticleImage = (
            <div className={classNames(cls.article, {}, [className])}>
                <AppImage
                    src={block.src}
                    className={cls.image}
                    alt={block.title}
                />
                {block.title && <Text title={block.title} align={'center'} />}
            </div>
        );

        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                off={DeprecatedArticleImage}
                on={RedesignedArticleImage}
            />
        );
    },
);

export default ArticleImage;
