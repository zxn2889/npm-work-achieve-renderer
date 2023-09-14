// 删除 vnode 对应的真实 DOM
function unmount(vnode) {
    if (vnode.type === Fragment) {
        vnode.children.forEach(v => unmount(v))
        return
    }
    const parent = vnode._el.parentNode
    if (parent) parent.removeChild(vnode._el)
}

let currentInstance = null

// 挂载生命周期-setup 内
function onMounted(fn) {
    if (currentInstance) {
        currentInstance.mounted.push(fn)
    }
}

function setInstance(instance) {
    currentInstance = instance
}

export { unmount, onMounted, setInstance }