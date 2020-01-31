# React Router

- if we want to open render the same component in many routes, we can use array in path prop, if we don't have access to roter props we can use withRouter

```
path={['/createEvent', '/manage/:id']}
withRouter(App);
```
