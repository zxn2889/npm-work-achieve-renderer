# Achieve-renderer

Implement a simple Vue renderer.

# Installing
```js
npm i -D @zxn2889/achieve-renderer
```

or (recommend)

```js
pnpm add -D @zxn2889/achieve-renderer
```

# Example

```js
import { createRenderer, createElement, setTextContent, insert } from '@zxn2889/achieve-renderer'

const renderer = createRenderer({ createElement, setTextContent, insert })

function MyComponent(props) {
    return {
        type: 'div',
        children: `我是小黑，我今年 ${props.count} 岁了`
    }
}
MyComponent.options = {
    count: 1
}

const vnode = {
    type: MyComponent
}

renderer.render(vnode, document.getElementById('app'))
```