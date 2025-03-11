import Separator from "@/features/abilities/components/Separator";
import FileUploader from "./FileUploader";
import FilesList from "./FilesList";

export default function FileUploaderShowcase() {
  return (
    <div className="showcase flex justify-between">
       <FileUploader/>
       <Separator/>
       <FilesList/>
    </div>
  );
}
