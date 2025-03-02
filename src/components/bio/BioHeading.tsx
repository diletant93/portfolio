export default function BioHeading({children}:{children:React.ReactNode}) {
  return (
    <h3 className="text-secondary text-xl tracking-wide uppercase underline underline-offset-4">
        {children}
    </h3>
  );
}
