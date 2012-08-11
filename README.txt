jQuery Sticky Footer

I originally found the code at CSS-Tricks.com (http://css-tricks.com/snippets/jquery/jquery-sticky-footer/), but the code is not really working well, so I fixed it and have now posted it here. Feel free to use it as you want, just reference back to me in the code comments.



jQuery code designed to keep the footer at the bottom of the page.
HTML
Just make sure the #footer is the last visible thing on your page.

<div id="footer">
    Sticky Footer
</div>
Also make sure that your header and content areas are properly defined as ID's.
CSS
Giving it a set height is the most fool-proof.

#footer { height: 100px; width: 100%; }
