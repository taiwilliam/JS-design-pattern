const Store = (function () {
    let instance = null;

    class Store {
        constructor (defaultState = {}) {
            this.state = defaultState;
        }

        get (key) {
            return Reflect.get(this.state, key);
        }

        has () {
            return Reflect.has(this.state, key);
        }

        add (key, payload) {
            this.setState({
                [key]: payload,
            });
        }

        delete (key) {
            const state = this.state;

            Reflect.has(state, key) && Reflect.delete(state, key);

            this.setState(state);
        }

        setState (payload) {
            Object.assign(this.state, payload)
        }
    }

    return function () {
        if (!new.target) {
            throw new Error('must be called with new');
        }

        return instance || (instance = new Store(...arguments));
    }
})();

const One = new Store({
    msg: 'Hello william!',
});
const Two = new Store({
    msg: 'Hello tina!',
});

Two.setState({msg: 'Hello tina!',})
console.log(One)
console.log(Two)

console.log(One === Two); // true