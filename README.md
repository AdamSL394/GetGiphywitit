# GetGiphywitit
This repo shows the use of <a href="https://developers.google.com/maps/documentation/javascript/get-api-key">API keys</a> inside of a Javascript file. We are taking the url and concatenating in perameters that the user searches for. In this case gifs, when we retreive the information we then <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">promises</a> to run the function generating the images and all the associated classes and attributes. From here we append them to the page. Each time the page loads we are making the array of buttons, and each time the user clicks on the add image button we add the users input to the array  and iterate through again and the buttons are added. Additionally when the images are all loaded we are pulling there still image URL. We set a click listener for on there class and pull the data attribue value and reassing the attribute to one that containes the moving image. If the image is already playing the user can then click on it again to reasing the data attribute to the still url. 

## Perquisites
You need to git pull this repo to your desktop using git clone . and the url from git hub. 

## Running Tests/Instructions
Open the file in  your browser (preferably google chrome) to test the code.
This will show a page with buttons and a input for adding new button topics. When the buttons are clicked on gifs 5 gips will be broguh back under that category. Clicking on the gips will start and stop the animation. 

## Built with:
<ol>
<li> HTML 
<li> CSS 
<li> Javascript
<li> JQuery
<li> Giphy API Key
</ol>

### Local Development Environment for website Repo
The following will get up and running locally.

Author
Adam Lehrer

![Get Giphy With It]()