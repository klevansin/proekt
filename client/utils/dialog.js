import { $$ } from './ui';

export default function dialog(message) {
    const $dlg = $$['dlg-1'];
    const $msg = $$.message;

    $dlg.dialog('open');
    $msg.text(message);
}
