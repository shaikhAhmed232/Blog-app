const createConditions = (where) => {
    let condtions = '';
        if (where) {
            let keys = Object.keys(where)
            let values = Object.values(where).map(value => typeof value === 'string' ? `'${value}'` : value)
            keys.forEach((key, index) => {
                condtions += `${key} = ${values[index]} ${index === keys.length - 1 ? '' : ' AND '}`
            })
        }
    return condtions;
} 

module.exports = {createConditions}