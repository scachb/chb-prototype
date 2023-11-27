# TODO

Conventions for managing the global session for each service

Using the data['name-of-service']['name-of-journey/feature']['name-of-field']

In nunjucks macro

```
  {{ govukInput({
    name: data[name-of-service][name-of-journey][name-of-input]
  }) }}
```

In HTML

```
  <input type="text" name="data[name-of-service][name-of-journey][name-of-input]">
```

## Accessing values

In views

```
  {{ data['name-of-service']['name-of-journey']['name-of-field'] }}
```

In routes.js

```
  const value = request.session.data['name-of-service']['name-of-journey']['name-of-field']
```