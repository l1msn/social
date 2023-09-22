import React, { JSX, memo } from 'react';
import { IUser } from '@/entities/User';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import Avatar from '@/shared/ui/redesigned/Avatar';
import { Text } from '@/shared/ui/redesigned/Text';
import Button from '@/shared/ui/redesigned/Button';
import { useTranslation } from 'react-i18next';
import Icon from '@/shared/ui/redesigned/Icon';
import ViewsIcon from '@/shared/assets/icons/redesigned/eye.svg';

interface IArticleAdditionalInfoProps {
    className?: string;
    author: IUser;
    createdAt: string;
    views: number | string;
    onEdit: () => void;
}

const ArticleAdditionalInfo: React.FC<IArticleAdditionalInfoProps> = memo(
    (props: IArticleAdditionalInfoProps): JSX.Element => {
        const { className, author, createdAt, views, onEdit } = props;

        const { t } = useTranslation('article');

        return (
            <VStack gap={'32'} className={className}>
                <HStack gap={'8'}>
                    <Avatar src={author.avatar} size={32} />
                    <Text text={author.username} bold />
                    <Text text={createdAt} />
                </HStack>
                <HStack max justify={'center'} gap={'8'}>
                    <Icon Svg={ViewsIcon} />
                    <Text
                        text={t('{{count}} views', {
                            count: parseInt(views.toString()),
                        })}
                    />
                </HStack>
                <HStack max justify={'center'} gap={'8'}>
                    <Button disabled onClick={onEdit} variant={'filled'}>
                        {t('Edit')}
                    </Button>
                </HStack>
            </VStack>
        );
    },
);

export default ArticleAdditionalInfo;
