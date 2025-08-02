const express = require('express');
const app = express();

const notificationsRoute = require('./routes/notifications.route');

app.use('/notifications', notificationsRoute);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});