export const data = {
    count: 0,
    title: 'Counter',
    value: 69,
}

let callback = () => {};

// function changeData(){
//     data.count++;
//     callback();
// }

export function increaseDataCount() {
    data.count++;
    callback();
}

export function decreaseDataCount() {
    data.count--;
    callback();
}

// setInterval(changeData, 1000);

export function setChangeDataCallback(newCallback) {
    callback = newCallback;
}
