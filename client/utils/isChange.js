function clone(val) {
    const type = Array.isArray(val) ? 'array' : typeof val;
    if (type === 'array') {
        return [...val];
    }
    if (type === 'object') {
        return { ...val };
    }
    return val;
}
const eq = (a, b) => {
    const t1 = Array.isArray(a) ? 'array' : typeof a;
    const t2 = Array.isArray(b) ? 'array' : typeof b;

    if (t1 !== t2) return false;
    if (t1 === 'array') {
        if (a.length !== b.length) return false;
        for (let i = 0; i < a.length; i++) {
            if (!eq(a[i], b[i])) return false;
        }
        return true;
    } if (t1 === 'object') {
        const oa = Object.keys(a);
        const ob = Object.keys(b);

        if (oa.length !== ob.length) return false;
        for (let i = 0; i < oa.length; i++) {
            const name = oa[i];
            if (!(name in b)) return false;

            if (!eq(a[name], b[name])) return false;
        }
    } else {
        return (a === b);
    }

    return true;
};

const story = {};
export const isChange = (name, val) => {
    if (!(name in story)) {
        story[name] = clone(val);
        return true;
    }

    if (!eq(story[name], val)) {
        story[name] = clone(val);
        return true;
    }
    return false;
};
