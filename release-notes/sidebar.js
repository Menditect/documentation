function sortVersions(items) {
    return [...items].sort((a, b) => {
        return b.id.localeCompare(a.id, undefined, { numeric: true, sensitivity: 'base' });
    })
}

function sortReleaseNotesSideBar(items) {
    if (!items) { return null; }
    // recursively call sort on nested children
    const result = items.map((item) => {
        if (item.type === 'category') {
        return {...item, items: sortReleaseNotesSideBar(item.items)};
        }
        return item;
    });

    console.log(result);
    const index = [];
    const rest = [];
    items.forEach(item => (item.id === 'index' ? index : rest).push(item));
    console.log(index, rest)
    const sortedRest = sortVersions(rest);
    console.log(sortedRest)
    const newResult = [
        ...index,
        ...sortedRest,
    ]
    console.log(newResult);

    return newResult;
}

module.exports = sortReleaseNotesSideBar;