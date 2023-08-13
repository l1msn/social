import React, {ErrorInfo, ReactNode, Suspense} from 'react';
import PageError from '@/widgets/PageError';
import Loader from '@/shared/ui/Loader';

interface IErrorBoundaryProps {
    children: ReactNode;
}

interface IErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
    constructor(props: IErrorBoundaryProps) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error: Error) {
        return {hasError: true};
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        const {hasError} = this.state;
        const {children} = this.props;
        if (hasError) {
            return (
                <Suspense fallback={<Loader/>}>
                    <PageError/>
                </Suspense>
            );
        }

        return children;
    }
}

export default ErrorBoundary;
