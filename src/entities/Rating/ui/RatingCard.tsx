import React, {JSX, useCallback, useState} from 'react';
import {Card} from '@/widgets/Card';
import {HStack, VStack} from '@/widgets/Stack';
import StarRating from '@/widgets/StarRating';
import {Text} from '@/shared/ui/Text';
import {Modal} from '@/widgets/Modal';
import {Input} from '@/shared/ui/Input';
import {useTranslation} from 'react-i18next';
import Button from '@/shared/ui/Button';
import ThemeButton from '@/shared/ui/Button/consts/ThemeButton';
import {BrowserView, MobileView} from 'react-device-detect';
import {Drawer} from '@/shared/ui/Popups';
import SizeButton from '@/shared/ui/Button/consts/SizeButton';

interface IRatingCardProps {
    className?: string,
    rate?: number,
    title?: string,
    feedbackTitle?: string,
    hasFeedback?: boolean,
    onCancel?: (starsCount: number) => void,
    onAccept?: (starsCount: number, feedback?: string) => void;
}

const RatingCard: React.FC<IRatingCardProps> = (props: IRatingCardProps): JSX.Element => {
    const {className,
        title,
        feedbackTitle,
        hasFeedback,
        onCancel,
        onAccept,
        rate = 0,
    } = props;

    const {t} = useTranslation();

    const [isModalOpen, setIsOpenModal] = useState<boolean>(false);
    const [starsCount, setStarsCount] = useState<number>(rate);
    const [feedback, setFeedback] = useState<string>('');

    const onSelectStars = useCallback((selectedStartCount: number) => {
        setStarsCount(selectedStartCount);
        if (hasFeedback) {
            setIsOpenModal((prevState) => !prevState);
        } else {
            onAccept?.(selectedStartCount);
        }
    }, [hasFeedback, onAccept]);

    const acceptHandler = useCallback(() => {
        setIsOpenModal(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandler = useCallback(() => {
        setIsOpenModal(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <>
            <Text title={feedbackTitle}/>
            <Input value={feedback} onChange={setFeedback} placeholder={t('Your review')}/>
        </>
    );

    return (
        <Card className={className} max>
            <VStack align={'center'} gap={'8'}>
                <Text title={starsCount ? t('Thanks for review') : title}/>
                <StarRating selectedStars={starsCount} size={60} onSelect={onSelectStars}/>
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} lazy>
                    <VStack gap={'32'} max>
                        {modalContent}
                        <HStack max gap={'16'} justify={'end'}>
                            <Button onClick={cancelHandler} theme={ThemeButton.WITHLINE_RED}>
                                {t('Close')}
                            </Button>
                            <Button onClick={acceptHandler} theme={ThemeButton.WITHLINE}>
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
                        <Button fullWidth onClick={acceptHandler} size={SizeButton.XL} theme={ThemeButton.WITHLINE}>
                            {t('Send')}
                        </Button>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    );
};

export default RatingCard;


