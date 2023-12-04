# How to use the Manage Prototype feature with this repo

This repo's structure is very different from the traditional GOV.UK's manage prototype page. Let's say I wanted to create a new question page for a journey:

> IMPORTANT: Make sure you have created your new service/journey and their respective folders efore creating pages using this method.

1. First got to /manage-your-prototype and click through to create the question page
2. Where it asks you for the url put in the url of the page prefixed by `service name` and `journey name` (if there is one). For example, `/universal-credit/individual/start.html`
3. The GOV.UK Prototype Kit will have created your new html file under the `universal-credit/individual` folder called `start.html` and pasted in the question page code.

You can still create pages from copying and pasting but this is a good method to create quick feature pages or pages for your journey.

Next read [How to link to pages within services](./linking.md)