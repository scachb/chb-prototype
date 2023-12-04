# How to link to pages within services

## How to link to service/journey pages

To link between journey pages or service pages you will proably use the `a` html tag or the `form` html tag. Usually the url you would put in the attribute of each tag would look something like this:

```html
<a href="/example">Example link</a>
<form action="/example">Example form</form>
```

In the attribute `href` or `action` you'd put the url of the page, normally if it's an external service you'd put the full url like `https://www.bbc.co.uk` but since it's an internal service you can use something called `relative` urls. Which just means you can omit the `https//.com` part.

A good mental model to link between pages is to think that every page you create starts at the `views` folder, for example, if I created a `questions.html` file under `views` then the url would be `/questions`. If I create a file under the folder `universal-credit` called `questions.html` the url would look like this: `/universal-credit/questions`.

An `index.html` is the starting point of a folder, so an `index.html` under `views` would have the url of `/` but an `index.html` file under `universal-credit` folder would have the url of `/universal-credit`.

This however becomes a problem when we have to type out `/service-name/journey-name/page.html` every time we want to navigate to a page, and if you ever change the service name you now have to go and change the url on every page that links to it.

To fix this we have a `urls.html` file that is optional but encouraged to use and maintain.

To use the variables from `urls.html` just import it into any .html file using the same syntax you use to ring in GOV.UK components.

```html
{# This brings in all service/journey urls under `urls` #}
{% import "common/urls.html" as urls %}

<!-- And use it in a form or a tag -->
<a href="{{ urls.child_benefit_unauth }}/page">Example link</a>
<form action="{{ urls.child_benefit_unauth }}/page">Example form</form>

{# or if you want individual urls #}

{% from "common/urls.html" import child_benefit_unauth %}

<!-- And use it in a form or a tag -->
<a href="{{ child_benefit_unauth }}/page">Example link</a>
<form action="{{ child_benefit_unauth }}/page">Example form</form>
``` 

## How to link in routes.js

> TODO

Next read - [How to use common components](./common.md)