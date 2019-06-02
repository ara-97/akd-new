// html skeleton provider
function template(title, initialState = {}, content = "") {
  let scripts = ''; // Dynamically ship scripts based on render type
  if (content) {
    scripts = ` <script>
                   window.__STATE__ = ${JSON.stringify(initialState)}
                </script>
                <script src="assets/client.js"></script>
                `
  } else {
    scripts = ` <script src="assets/client.js"> </script> `
  }
  let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8" />
                <title> ${title} </title>
                <link href="assets/style.css" rel="stylesheet" />
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta name="theme-color" content="#000000" />
              </head>
              <body>
                   <div id="app">
                     ${content}
                   </div>
                  ${scripts}
              </body>
              `;

  return page;
}

module.exports = template;
