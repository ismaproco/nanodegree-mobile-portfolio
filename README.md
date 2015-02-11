This was my experience optimizing the nanodegree mobile portfolio

#Online Demo:
http://chitomsa.com/mobile-portfolio

#Development

* Optimizing the index.html

- The first thing I did was to execute the PageSpeed test of google to identify the initial issues of the page.
- based on the results I started optimizing the image file size of pizzeria.jpg, I create another image wich I called pizzeria mini, with a width size of 100px, because was being set like that by default in the image style. I use a google recommended application for image optimization: http://jpegclub.org/
- Repeat the same process with the profile pic.

- Then I start to optimize the blocking css and javascript files.
- First I move the analytics code to the end of the perfmatters.js so there will only be one file with js code.
- Second I added the media=print to the print specific styles.
- Third, Added the async option to the js asset load, in this way I will not block the CPR.
- Lastly I found that I will get the best results if I move the styles and js files at the bottom of the page so the html parse will not be affected.

* Optimizing pizza.html

- The first thing I did was play with the and save every result in the Time line.
- In there I identify the processes that take more time in the page in two aspects.
- The first is when I scrolled the page, and the second when I change the pizza size.
- Working in the method: changePizzaSizes.
- While testing I found the multiple querySelectors inside the for loop were taking a lot of time to recalculate the same dx and width, for all the images even if all the images will have the same size, then I improve the algorithm calculating the values just once before the loop and then assign those values to each one of the pizzas. I reach a time of ~2-4ms.
- Working in the method: updatePositions
- I found the ScrollTop was request in each loop iteration and that was taking a lot of painting time, so I extract that value from the function and do the calc outside the loop. There was a huge performance improvement just with that, then I started looking at the Math.sin used for the phase calculation to be repeated to each 5ht element so I extracted that calculation of the method and put it an array, but this didn't represent any performance improvement.
- I'm looking for ways to improve the painting time of the app, I asked in the forums and they suggest to use css transforms, try to implement them, but the performance actually decrease, probably by my implementation.
- I found the removal of the logAverageFrame in the updatePositions Method befeneficial for the average FPS in the pizza.html page.

#Optimizing tools

- Google Chrome PageSpeed Insights Chrome extension
https://developers.google.com/speed/pagespeed/insights_extensions

- CSS minifier
http://www.phpied.com/cssmin-js/

- Web Page performace optimization
http://gtmetrix.com/

- JPG image optimizer
https://kraken.io/

