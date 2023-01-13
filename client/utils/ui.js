export const $$ = {};

export function ui(...ids) {
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
        return undefined;
    });
}
