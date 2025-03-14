export function removeTheQuotes(value: string) {
   // If the string doesn't have quotes, return it as is
   if (!value.includes('"')) {
       return value;
   }
   const parts = value.split('"');
   return parts[1] || value; // fallback to original value if split fails
}
export function abbreviateName(input: string): string {
    // Split the string into words
    const words = input.split(' ');
    if (words.length === 0) return input;
  
    // The first word remains unchanged
    const firstWord = words[0];
  
    // For each subsequent word, take the first letter (in uppercase) followed by a period
    const abbreviatedRest = words.slice(1)
      .map(word => word.charAt(0).toUpperCase() + '.')
      .join(' ');
  
    // Return the combined result
    return firstWord + (abbreviatedRest ? ' ' + abbreviatedRest : '');
  }
  
  export function abbreviateRegions(input: string): string {
    return input
      .split(' ')
      .map(token => {
        if (token.includes('-')) {
          // For hyphenated tokens, abbreviate each part (first letter + period)
          return token
            .split('-')
            .map(part => part.charAt(0).toUpperCase() + '.')
            .join('-');
        } else {
          // For a single word, abbreviate to the first letter with a period.
          return token.charAt(0).toUpperCase() + '.';
        }
      })
      .join(' ');
  }
 export function capitalizeFirstLetter(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
