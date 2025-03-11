import Loader from "@/components/Loader";
import { useFiles } from "../hooks/useFiles";
import FileListItem from "./FileListItem";

export default function FilesList() {
  const {files, isLoading} = useFiles()
  if(isLoading || !files) return <Loader/>
  if(files?.length === 0) return <div className="w-full h-full flex-center uppercase">There's no files yet</div>
  return (
    <div className="pr-2 space-y-2">
      {files.map(file => <FileListItem name={file.name} />)}
    </div>
  );
}
