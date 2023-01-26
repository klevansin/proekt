import screen from './screen';

export const ui = {};

export function addUI(...ids) {
    ids.map((id) => {
        const widg = $(`#${id}`);
        ui[id] = widg;
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
        if (id.indexOf('progress-') === 0) {
            widg.progressbar({ value: false });
        }
        return undefined;
    });
    return ui;
}
let waiterInit = false;
export const waiter = (ev) => {
    if (!waiterInit) {
        waiterInit = true;
        const winOff = { x: -1, y: -1 };
        const scr = { width: -1, height: -1 };
        setInterval(() => {
            const s = screen();
            if (winOff.x !== window.pageXOffset || winOff.y !== window.pageYOffset || s.width !== scr.width || s.height !== scr.height) {
                winOff.x = window.pageXOffset;
                winOff.y = window.pageYOffset;
                scr.width = s.width;
                scr.height = s.height;

                ui.waiter.css({
                    height: scr.height, width: scr.width, left: 0, top: winOff.y,
                });
            }
        }, 1000);
    }

    if (ev === 'show') {
        ui.waiter.show();
    } else {
        ui.waiter.hide();
    }
};
export function createUI() {
    const list = $('*');
    const ids = [];
    list.each((i, dom) => (dom.id ? ids.push(dom.id) : ''));
    addUI(...ids);

    waiter('hide');

    return ui;
}
