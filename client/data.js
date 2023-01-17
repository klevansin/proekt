let init = {
    ID: false,
    PREV_HASH: '',
    h: '',
    k: '',

    clients: {
        data: [],
        columns: [
            { data: 'ID_CLIENT', title: 'id' },
            { data: 'NAME1', title: 'имя' },
            { data: 'NAME2', title: 'фамилия' },
            { data: 'DATE_BIRTH', title: 'дата рождения' },
            { data: 'DATE_CREATE', title: 'дата создания' },
        ],
    },

    finds: {
        data: [],
        columns: [
            { data: 'NAME1', title: 'имя' },
            { data: 'NAME2', title: 'фамилия' },
            { data: 'DATE_BIRTH', title: 'дата рождения' },
        ],
    },
    current: {
        ID_CLIENT: false,
        NAME1: false,
        NAME2: false,
    },

    results: {
        data: [],
        columns: [
            { data: 'DATE', title: 'date' },
            { data: 'INFO', title: 'рузультат' },
        ],
    },

    test: {
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
    },
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
