export const $$ = {};

export function addUI(...ids) {
    ids.map((id) => {
        const widg = $(`#${id}`);
        $$[id] = widg;
        if (id.indexOf('dlg-') === 0) {
            widg.dialog();
            widg.dialog('close');
        }
        if (id.indexOf('btn-') === 0) {
            widg.button();
        }
        if (id.indexOf('group-') === 0) {
            widg.controlgroup();
        }
        if (id.indexOf('tabs-') === 0) {
            widg.tabs();
        }
        return undefined;
    });
    return $$;
}

export function createUI() {
    const list = $('*');
    const ids = [];
    list.each((i, dom) => (dom.id ? ids.push(dom.id) : ''));
    addUI(...ids);

    return $$;
}
