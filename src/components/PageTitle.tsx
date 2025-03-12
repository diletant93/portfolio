import Heading from "./Heading";

export default function PageTitle({children}:{children:React.ReactNode}) {
  return (
    <div className="text-center py-10 border-b border-b-secondary">
           <Heading>{children}</Heading>
     </div>
  );
}
