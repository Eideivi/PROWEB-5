const express = require('express');
const morgan = require('morgan');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(require('./routes'));
app.use('/api/panel12', require('./routes/panel12'));

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
