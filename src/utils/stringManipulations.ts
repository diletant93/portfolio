export function removeTheQuotes(value:string){
   return value.split('"').at(1) as string
}