import { ChangeEvent, useRef, useState } from "react";
import { useUploadFile } from "../hooks/useUploadFile";
import { Button } from "@/components/ui/button";
export default function FileUploader() {
  const [file, setFile] = useState<File | null>(null)
  const {uploadFile, isPending} = useUploadFile()
  const inputRef = useRef<HTMLInputElement>(null)
  function handleFileChange(e: ChangeEvent<HTMLInputElement>){
    if(e.target.files){
      setFile(e.target.files[0])
    }
  }
  async function handleFileUpload(){
    if(!file) return
    await uploadFile(file,{onSuccess:()=>handleClear()})
  }
  function handleClear(){
    setFile(null)
    if(inputRef.current){
      inputRef.current.value = ''
    }
  }
  return (
     <div className="flex-1 flex flex-col justify-center items-center md:h-auto h-1/2 gap-2 md:w-1/2">
      <input id="fileInput" ref={inputRef} type="file" className="w-full" onChange={handleFileChange} hidden/>
      <Button className="shadcn-button p-10" onClick={() => inputRef.current?.click()}>Load file</Button>
      {file && (
        <p className="w-[200px] text-center truncate">{file.name}</p>
      )}
      {file &&(
        <div className="flex gap-2 w-2/3 md:w-4/5">
          <Button className="shadcn-button flex-1" onClick={handleClear}>Clear</Button>
          <Button className="shadcn-button flex-1" onClick={handleFileUpload} disabled={isPending}>{isPending?'Uploading...':'Upload'}</Button>
        </div>
      )}
    </div>
  );
}
