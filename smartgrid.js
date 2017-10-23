const smartgrid = require('smart-grid');

const settings = {
    filename: '_smart-grid',
    columns: 24,
    outputStyle: 'scss',
    offset: '10px',
    container: {
        maxWidth: '960px',
        fields: '30px'
    },
    breakPoints: {
        md: {
            width: '960px',
            fields: '20px'
        },
        sm: {
            width: '780px',
            fields: '15px'
        },
        xs: {
            width: '576px',
            fields: '10px'
        },
        xxs: {
            width: '420px',
            fields: '10px'
        }
    },
    properties: [],
    oldSizeStyle: false
};

smartgrid('./src/precss', settings);