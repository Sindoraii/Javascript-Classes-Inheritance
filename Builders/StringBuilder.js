import BaseBuilder from "./BaseBuilder.js";

function StringBuilder(str = "") {
    Object.setPrototypeOf(this, new BaseBuilder(str))

    this.sub = function (from, n) {
        this.init = this.init.substring(from, n+1);
        return this;
    }

    this.remove = function (sub) {
        let chars = Array.from(this.init);

        while(this.init.indexOf(sub) !== -1) {
            chars.splice(this.init.indexOf(sub),sub.length)
            this.init = chars.join('');
        }
        return this;
    }
}
export default StringBuilder;
