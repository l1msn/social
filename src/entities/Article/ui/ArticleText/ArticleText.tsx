import React, { JSX, memo } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './ArticleText.module.scss';
import { IArticleTextBlock } from '../../model/types/IArticle';
import { Text as DeprecatedText } from '@/shared/ui/deprecated/Text';
import { ToggleFeatures } from '@/shared/features';
import { Text } from '@/shared/ui/redesigned/Text';

interface IArticleTextProps {
    className?: string;
    block: IArticleTextBlock;
}

const ArticleText: React.FC<IArticleTextProps> = memo(
    ({ block, className }: IArticleTextProps): JSX.Element => {
        const DeprecatedArticleText = (
            <div className={classNames(cls.article, {}, [className])}>
                {block.title && (
                    <DeprecatedText title={block.title} className={cls.title} />
                )}
                {block.paragraphs.map((paragraph) => (
                    <DeprecatedText
                        key={paragraph}
                        text={paragraph}
                        className={cls.paragraphs}
                    />
                ))}
            </div>
        );

        const RedesignedArticleText = (
            <div className={classNames(cls.article, {}, [className])}>
                {block.title && (
                    <Text title={block.title} className={cls.title} />
                )}
                {block.paragraphs.map((paragraph) => (
                    <Text
                        key={paragraph}
                        text={paragraph}
                        className={cls.paragraphs}
                    />
                ))}
            </div>
        );

        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={RedesignedArticleText}
                off={DeprecatedArticleText}
            />
        );
    },
);

export default ArticleText;
