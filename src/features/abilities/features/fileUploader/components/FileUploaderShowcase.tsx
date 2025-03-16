import Separator from "@/features/abilities/components/Separator";
import FileUploader from "./FileUploader";
import FilesList from "./FilesList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { MEDIA_QUERIES } from "@/constants/mediaQueries";

export default function FileUploaderShowcase() {
    const matched = useMediaQuery(MEDIA_QUERIES.MD)
    if (matched) {
        return (
            <div className="showcase flex md:flex-row h-[40vh] md:h-[15rem] flex-col justify-between">
                <FileUploader />
                <Separator />
                <div className="flex-1 overflow-y-auto custom-scrollbar ">
                    <FilesList />
                </div>
            </div>)
    }
    if (!matched) {
        return (
            <Tabs defaultValue="uploader" className="shadcn-tabs">
                <TabsList className="shadcn-tabs-list">
                    <TabsTrigger value="uploader" className="shadcn-tabs-trigger">Uploader</TabsTrigger>
                    <TabsTrigger value="files"  className="shadcn-tabs-trigger">Files</TabsTrigger>
                </TabsList>
                <TabsContent value="uploader" className="w-full">
                    <div className="showcase flex md:flex-row h-[40vh] md:h-[15rem] flex-col justify-between -translate-y-4 md:translate-y-0">
                        <FileUploader />
                    </div>
                </TabsContent>
                <TabsContent value="files" className="w-full">
                    <div className="showcase flex md:flex-row h-[40vh] md:h-[15rem] flex-col justify-between">
                        <div className="flex-1 overflow-y-auto custom-scrollbar ">
                            <FilesList />
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        )
    }
}
