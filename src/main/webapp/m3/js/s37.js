/**
 * get / set
 */

class PersonB {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }

    get fullName() {
        return this.first + ' ' + this.last;
    }

    set fullName(name) {
        let buffer = name.split(' ');
        this.first = buffer[0];
        this.last = buffer[1];
    }
}

function log37(first, last) {
    let p = new PersonB(first, last);
    console.log(p.fullName);

    p.fullName = 'Bob Hope';
    console.log(p.fullName);
}
