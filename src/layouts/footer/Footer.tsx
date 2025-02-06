import Copyright from "@/components/Copyright";
import Socials from "@/components/Socials";

export default function Footer() {
  return (
    <div className="footer">
        <Socials/>
        <p className="uppercase">Made with love and code</p>
       <Copyright/>
    </div>
  );
}
