//essa parte corresponde a um desafio feito no modulo
//de fundamentos funcionais 

function composicao(...fns) {
    return valor => {
        return fns.reduce(async (acc, fn) => {
            if(Promise.resolve(acc) === acc) {
                return fn(await acc);
            } else {
                return fn(acc);
            }
        }, valor);
    };
};

module.exports = { composicao };
