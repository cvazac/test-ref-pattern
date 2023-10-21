# test-ref-pattern

Try it out on [codepan](https://codepan.net/gist/477675309cafd4c4517144e1432c6e8c).

## Getting Started
```html
git clone git@github.com:cvazac/test-ref-pattern.git
cd test-ref-pattern
npm install
npm start
```

## Testing patterns
Manually edit the "PatternComponent" component found [here](https://github.com/cvazac/test-ref-pattern/blob/master/src/PatternComponent.js) and explore to [http://localhost:3000/](http://localhost:3000/).

Make sure you return `<ChildComponent/>` from your `render()` method. 

You will see that this pattern forces a needless re-render of `ChildComponent`. 
```html
<ChildComponent prop={{}} />
```

There is no needless re-render with this pattern:
```html
<ChildComponent prop={static_empty_object} />
```
