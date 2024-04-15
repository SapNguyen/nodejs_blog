const Handlebars = require('handlebars');

module.exports = {
    sum: (a, b) => a + b,
    sortable: (field, sort) => {
        const sortType = field === sort.column ? sort.type : 'default';

        const icons = {
            default: 'fa-solid fa-sort',
            asc: 'fa-solid fa-sort-down',
            desc: 'fa-solid fa-sort-up',
        };

        const types = {
            default: 'desc',
            asc: 'desc',
            desc: 'asc',
        };

        const icon = icons[sortType];
        const type = types[sortType];

        const href = Handlebars.escapeExpression(`?_sort&column=${field}&type=${type}`); //bảo vệ k cho ng dùng nhập lung tung

        const output = `<a href="${href}" class="text-dark">
                    <i class="${icon}"></i>
                </a>`;
        return new Handlebars.SafeString(output);
    },
};
