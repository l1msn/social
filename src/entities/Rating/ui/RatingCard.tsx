import React, { JSX, useCallback, useState } from 'react';
import { Card as DeprecatedCard } from '@/shared/ui/deprecated/Card';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import StarRating from '@/shared/ui/deprecated/StarRating';
import { Text as DeprecatedText } from '@/shared/ui/deprecated/Text';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Input as DeprecatedInput } from '@/shared/ui/deprecated/Input';
import { useTranslation } from 'react-i18next';
import { default as DeprecatedButton } from '@/shared/ui/deprecated/Button';
import ThemeButton from '@/shared/ui/deprecated/Button/consts/ThemeButton';
import { BrowserView, MobileView } from 'react-device-detect';
import { Drawer as DeprecatedDrawer } from '@/shared/ui/deprecated/Popups';
import SizeButton from '@/shared/ui/deprecated/Button/consts/SizeButton';
import { ToggleFeatures } from '@/shared/features';
import { Input } from '@/shared/ui/redesigned/Input';
import { Text } from '@/shared/ui/redesigned/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import Button from '@/shared/ui/redesigned/Button';
import { Drawer } from '@/shared/ui/redesigned/Popups';

interface IRatingCardProps {
    className?: string;
    rate?: number;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
}

const RatingCard: React.FC<IRatingCardProps> = (
    props: IRatingCardProps,
): JSX.Element => {
    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onCancel,
        onAccept,
        rate = 0,
    } = props;

    const { t } = useTranslation();

    const [isModalOpen, setIsOpenModal] = useState<boolean>(false);
    const [starsCount, setStarsCount] = useState<number>(rate);
    const [feedback, setFeedback] = useState<string>('');

    const onSelectStars = useCallback(
        (selectedStartCount: number) => {
            setStarsCount(selectedStartCount);
            if (hasFeedback) {
                setIsOpenModal((prevState) => !prevState);
            } else {
                onAccept?.(selectedStartCount);
            }
        },
        [hasFeedback, onAccept],
    );

    const acceptHandler = useCallback(() => {
        setIsOpenModal(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandler = useCallback(() => {
        setIsOpenModal(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const DeprecatedRatingCardModal = (
        <>
            <DeprecatedText title={feedbackTitle} />
            <DeprecatedInput
                data-testid={'RatingCard.Input'}
                value={feedback}
                onChange={setFeedback}
                placeholder={t('Your review')}
            />
        </>
    );

    const RedesignedRatingCardModal = (
        <>
            <Text title={feedbackTitle} />
            <Input
                data-testid={'RatingCard.Input'}
                value={feedback}
                onChange={setFeedback}
                placeholder={t('Your review')}
            />
        </>
    );

    const modalContent = (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={RedesignedRatingCardModal}
            off={DeprecatedRatingCardModal}
        />
    );

    const DeprecatedRatingCard = (
        <DeprecatedCard className={className} max data-testid={'RatingCard'}>
            <VStack align={'center'} gap={'8'}>
                <DeprecatedText
                    title={starsCount ? t('Thanks for review') : title}
                />
                <StarRating
                    selectedStars={starsCount}
                    size={60}
                    onSelect={onSelectStars}
                />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} lazy>
                    <VStack gap={'32'} max>
                        {modalContent}
                        <HStack max gap={'16'} justify={'end'}>
                            <DeprecatedButton
                                data-testid={'RatingCard.Close'}
                                onClick={cancelHandler}
                                theme={ThemeButton.WITHLINE_RED}
                            >
                                {t('Close')}
                            </DeprecatedButton>
                            <DeprecatedButton
                                data-testid={'RatingCard.Send'}
                                onClick={acceptHandler}
                                theme={ThemeButton.WITHLINE}
                            >
                                {t('Send')}
                            </DeprecatedButton>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <DeprecatedDrawer
                    isOpen={isModalOpen}
                    onClose={cancelHandler}
                    lazy
                >
                    <VStack gap={'32'}>
                        {modalContent}
                        <DeprecatedButton
                            fullWidth
                            onClick={acceptHandler}
                            size={SizeButton.XL}
                            theme={ThemeButton.WITHLINE}
                        >
                            {t('Send')}
                        </DeprecatedButton>
                    </VStack>
                </DeprecatedDrawer>
            </MobileView>
        </DeprecatedCard>
    );

    const RedesignedRatingCard = (
        <Card className={className} max data-testid={'RatingCard'}>
            <VStack align={'center'} gap={'8'}>
                <Text title={starsCount ? t('Thanks for review') : title} />
                <StarRating
                    selectedStars={starsCount}
                    size={40}
                    onSelect={onSelectStars}
                />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} lazy>
                    <VStack gap={'32'} max>
                        {modalContent}
                        <HStack max gap={'16'} justify={'end'}>
                            <Button
                                data-testid={'RatingCard.Close'}
                                onClick={cancelHandler}
                                variant={'cancel'}
                            >
                                {t('Close')}
                            </Button>
                            <Button
                                data-testid={'RatingCard.Send'}
                                onClick={acceptHandler}
                                variant={'accept'}
                            >
                                {t('Send')}
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} onClose={cancelHandler} lazy>
                    <VStack gap={'32'}>
                        {modalContent}
                        <Button
                            fullWidth
                            onClick={acceptHandler}
                            size={'l'}
                            variant={'outline'}
                        >
                            {t('Send')}
                        </Button>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    );

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={RedesignedRatingCard}
            off={DeprecatedRatingCard}
        />
    );
};

export default RatingCard;
