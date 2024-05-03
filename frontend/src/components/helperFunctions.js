export const reduceItems = (items) => {
    let result = {};
    items.forEach(item => {
        // console.log(item);
        if(result[item.id]) {
            result[item.id] += 1;
        } else {
            result[item.id] = 1;
        }
    });

    return result;
}