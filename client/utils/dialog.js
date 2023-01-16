import { ui } from './ui';

export default function dialog(message) {
    const $dlg = ui['dlg-1'];
    const $msg = ui.message;

    $dlg.dialog('open');
    $msg.text(message);
}
