import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";

export default function AppErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}
      onReset={() => {
        window.location.assign('/')
      }}
      onError={(error, info) => {
        console.error("Caught an error:", error);
        console.error("Component stack:", info.componentStack);
      }}
    >
      {children}
    </ErrorBoundary>
  );
}
