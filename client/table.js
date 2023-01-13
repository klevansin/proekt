export default class table {
    static create({
        data = [],
        fields = [],
        $parent = undefined,
    }) {
        const flds = fields;
        let head = '';
        flds.map((field) => {
            head = `${head}<td>${field.caption}</td>`;
        });
        const body = '';
        data.map((d) => {
            flds.map((field) => {

            });
        });
    }
}
