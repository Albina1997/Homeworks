function makeTree(nodes, parentId = null) {
    let tree = {}
    let root = nodes.filter(el => el.parentId === parentId)
    root.forEach(rootChild => {
        tree[rootChild.id] = makeTree(nodes, rootChild.id)
    })
    return tree
}