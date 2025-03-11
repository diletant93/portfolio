import { Button } from "@/components/ui/button";
import { useDeleteFile } from "../hooks/useDeleteFile";
import {useOptimistic} from 'react'
export default function FileListItem({name}:{name:string}) {
    const {isDeleting, deleteFile} = useDeleteFile()
    function handleDelete(){
        deleteFile(name)
    }
  return (
    <div className="flex justify-between items-center pb-2 border-b border-b-secondary last:border-b-0">
       <p className="w-[15rem] md:w-[10rem] truncate">{name}</p>
       <Button className="shadcn-button" disabled={isDeleting} onClick={handleDelete}>{isDeleting?'Deleting...':'Delete'}</Button>
    </div>
  );
}
