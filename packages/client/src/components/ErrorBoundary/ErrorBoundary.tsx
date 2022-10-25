import React, { Component, ErrorInfo, ReactNode } from 'react';


interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="p-6 border rounded border-gray-100">
                    <h1 className="px-4 py-4 flex flex-col gap-2 items-center text-gray-700">

                        <p>Something went wrong...</p>
                        <p>But we are already fixing</p>
                    </h1>
                </div> )
        } else {return this.props.children;}


    }
}

export default ErrorBoundary;
