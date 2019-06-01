module.exports = app => {
    // Pegando a função de user com o consign
    app.route('/users').post(app.api.user.save);
}