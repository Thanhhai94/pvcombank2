const getlistArray = (array,title) => {
    const results = []
    array.map(value => {
        const KQ = []
        title.map(a => KQ.push(value[a]))
        results.push(KQ)
})
    return results
}

module.exports = {
    getlistArray : getlistArray
}