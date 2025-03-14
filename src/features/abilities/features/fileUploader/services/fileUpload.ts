import { supabase } from "@/lib/supabase/config";

const STORAGE_PATH = "https://khcxakjuyxjoiveporyb.supabase.co/storage/v1/s3";
export async function uploadFile(file: File) {
  const fileName = `${file.name}-${Math.random()}`;
  const { data, error } = await supabase.storage
    .from("files")
    .upload(fileName, file);
  if (error) {
    const data = await deleteFile(fileName);
    if (!data) throw new Error("could not delete the file");
    throw error;
  }
  return data;
}
export async function deleteFile(filePath: string) {
  const { data, error } = await supabase.storage
    .from("files")
    .remove([filePath]);

  if (error) {
    return null;
  }
  return data;
}

export async function loadFiles() {
  const { data, error } = await supabase.storage.from("files").list("");
  if (error) {
    throw error;
  }
  return data;
}
