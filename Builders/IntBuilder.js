import BaseBuilder from "./BaseBuilder.js";

class IntBuilder extends BaseBuilder {
    constructor(init = 0) {
        super(init);
    }

    static random(from, to) {
        from = Math.trunc(from);
        to = Math.trunc(to);
        return Math.floor(Math.random() * (to - from +1 )) + from;
    }
    mod(num){
        this.init = this.init % num;
        return this;
    }
}
export default IntBuilder;
