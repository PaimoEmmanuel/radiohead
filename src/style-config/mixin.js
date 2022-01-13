//MEDIA QUERY MANAGER
/*
0-600px: Phone
600 - 900px: Tablet portrait
900 - 1200px: Tablet landscape
1200-1800px: Our normal desktop styles
1800px +: big desktop
ORDER:  Base + typography > general layout + grid >
        page layout > components
$breakpoint arguments choices:
-phone-small
-phone
-tab-prt
-tab-land
-big-desktop
1em = 16px
*/
export const respond = (breakpoint, queryStyle) => {
  //for 1800px
  if (breakpoint === "desktop") {
    return `@media only screen and (max-width: 112.5em) {
              ${queryStyle}
          };`;
  }
  //for 1200px
  if (breakpoint === "tab-land") {
    return `@media only screen and (max-width: 75em) {
            ${queryStyle}
        };`;
  }
  //for 900px
  if (breakpoint === "tab-port") {
    return `@media only screen and (max-width: 56.25em) {
            ${queryStyle}
        };`;
  }
  //for 600px
  else if (breakpoint === "phone") {
    return `@media only screen and (max-width: 37.5em) {
            ${queryStyle}
        };`;
  }
  //for 450px
  if (breakpoint === "phone-small") {
    return `@media only screen and (max-width: 28.125em) {
                ${queryStyle}
            };`;
  }
};
