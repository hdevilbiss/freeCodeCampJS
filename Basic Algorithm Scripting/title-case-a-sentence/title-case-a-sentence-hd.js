function titleCase(str) {
  let regex = /(?:^|\s)([A-Za-z])(\'*\w*)/g
  let strTitleCase = '';

  /**
   * Get Capture Groups
   */
  let firstChars = (str.match(regex) || [])
  .map(
    e => e.replace(regex, '$1')
    );

  let allTheRest =  (str.match(regex) || [])
  .map(
    e => e.replace(regex, '$2')
    );

    /**
     * Loop through the capture group arrays
     * Set the firstChars toUpperCase()
     * Set theRest toLowerCase()
     * 
     * Add a trailing space for each index;
     * except for the last one...
     */
    for ( let i = 0 ; i < firstChars.length ; i++) {
    if ( i == firstChars.length - 1 ) {
        strTitleCase += firstChars[i].toUpperCase()+allTheRest[i].toLowerCase();
    }
    else {
        strTitleCase += firstChars[i].toUpperCase()+allTheRest[i].toLowerCase()+' ';
    }
    }
  console.log(strTitleCase);
  return strTitleCase;
}