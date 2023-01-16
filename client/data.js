export const clients = {
    data: [
        { name: 'Mike', age: '18' },
        { name: 'Soma', age: '23' },
        { name: 'Drom', age: '7' },
    ],
    columns: [
        { data: 'name', title: 'name' },
        { data: 'age', title: 'age' },
    ],
};

export const results = {
    data: [
        { day: '01/02/34', result: 'жалобы 1' },
        { day: '01/03/34', result: 'назначено лечение 1' },
        { day: '01/04/35', result: 'выздоровление' },
    ],
    columns: [
        { data: 'day', title: 'day' },
        { data: 'result', title: 'result' },
    ],
};

export const test = {
    data: [
        {
            name: 'Tiger Nixon',
            position: 'System Architect',
            salary: '$3,120',
            start_date: '2011/04/25',
            office: 'Edinburgh',
            extn: '5421',
        },
        {
            name: 'Garrett Winters',
            position: 'Director',
            salary: '$5,300',
            start_date: '2011/07/25',
            office: 'Edinburgh',
            extn: '8422',
        },
    ],
    columns: [
        { data: 'name', title: 'Name' },
        { data: 'position', title: 'pos' },
        { data: 'salary', title: 'al' },
        { data: 'office', title: 'off' },
    ],
    rows: [
        {
            name: 'Mike',
            position: 'main',
            salary: '$9290303',
            start_date: '2011/04/25',
            office: 'Moscow',
            extn: '9403',
        },
        {
            name: 'Soma',
            position: 'Director',
            salary: '$5300',
            start_date: '2011/07/25',
            office: 'leningrad',
            extn: '93904',
        },

    ],
};

let init = {
    ID: false,
    PREV_HASH: '',
    h: '',
    k: '',

};

const changeCallbacks = [];
export const data = (newData = undefined) => {
    if (newData) {
        init = { ...init, ...newData };
        changeCallbacks.map((cb) => cb(init));
    }
    return init;
};

export const onChange = (callback) => {
    changeCallbacks.push(callback);
};
