import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function PageNotFound() {
    return (
        <div className="w-full h-full flex-center sm:flex-row flex-col gap-5">
            <p className="text-xl">Page Missing - Let's Go Back Home</p>
            <Link to='/'>
                <Button className="shadcn-button px-20 py-10 sm:px-10 sm:py-5">
                    Home
                </Button>
            </Link>
        </div>
    );
}
