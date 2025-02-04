export function removeTheQuotes(value: string) {
   // If the string doesn't have quotes, return it as is
   if (!value.includes('"')) {
       return value;
   }
   const parts = value.split('"');
   return parts[1] || value; // fallback to original value if split fails
}