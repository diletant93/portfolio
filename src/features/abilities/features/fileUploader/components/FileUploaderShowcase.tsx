import Separator from "@/features/abilities/components/Separator";
import FileUploader from "./FileUploader";
import FilesList from "./FilesList";

export default function FileUploaderShowcase() {
    return (
        <div className="showcase flex md:flex-row h-[40vh] md:h-[15rem] flex-col justify-between">
            <FileUploader />
            <Separator />
            <div className="flex-1 overflow-y-auto custom-scrollbar ">
                <FilesList />
            </div>
        </div>
    );
}
