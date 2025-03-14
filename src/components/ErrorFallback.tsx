import { FallbackProps } from 'react-error-boundary'
import { Button } from './ui/button';
export default function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
    return (
        <div className="h-[97vh] w-full flex-center flex-col gap-5">
            <h2 className='text-secondary text-xl'>Something went wrong</h2>
            <p className='font-semibold text-2xl'>{error.message}</p>
            <Button className='shadcn-button px-10 py-8 text-xl' onClick={resetErrorBoundary}>Return to home page</Button>
        </div>
    );
}
