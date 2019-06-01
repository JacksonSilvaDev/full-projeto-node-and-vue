module.exports = app => {
    function existOrError(value, msg) {
        // Se não existir
        if(!value) throw msg
        // Se for array vazio
        if(Array.isArray(value) && value.length === 0) throw msg
        // Se for String vazia
        if(typeof value ==='string'&& !value.trim()) throw msg
    }
    
    function notExistOrError(value,msg) {
        try {
            existOrError(value,msg)
        } catch (msg) {
            return
        }
        throw msg
    }
    
    function equalsOrError(valueA, ValueB, msg) {
        if(valueA != valueB) throw msg
    }

    return { existOrError, notExistOrError, equalsOrError }
}