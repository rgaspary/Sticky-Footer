# JavaScript Sticky footer [OUTDATED]

This function will set any footer to the bottom of the page using vanilla JavaScript. No jQuery required.

Just pass in the footer identifier and call the function and you are done.


## Update:
This is an old legacy function and should be avoided to be used, a better solution to this problem is to wrap the whole page in a container using flex box and justifying the footer section with `margin-top: auto;` like in the below example.

`index.html`
```HTML
  <html>
    <body>
      <div style="display: flex; flex-direction: column;">
        <!--Your header and main content goes here-->
        <div id="footer" style="margin-top: auto;">
          <p>This is the footer content</p>
        </div>
      </div>
    </body>  
  </html>
```
More information on Flexbox can be found in the [MDN documentation on Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
