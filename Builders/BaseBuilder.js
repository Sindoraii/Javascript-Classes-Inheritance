class BaseBuilder {
    constructor(init) {
        this.init = init;
    }

    plus(...args) {
        this.init =this.init + args.reduce((prev,current) => prev + current)
        return this;
    }

    minus(...args) {
        if (typeof this.init === 'number') {
            for (let i = 0; i < args.length; i++) {
                this.init -= args[i];
            }
            return this;
        }else if (typeof this.init === "string") {
            this.init =  this.init.slice(0, -args[0]);
            return this;
        }
    }

    multiply(int) {
        if(typeof this.init === 'number') {
            this.init *= int;
            return this;
        } else if(typeof this.init === 'string') {
            this.init = this.init.repeat(int);
            return this;
        }
    }

     divide(num) {
        if(typeof this.init === 'number' ) {
            this.init = Math.trunc(this.init / num);
            return this;
        } else if (typeof  this.init === 'string') {
            this.init =  this.init.slice(0, Math.trunc( this.init.length / num ));
            return this;
        }
     }

     get() {
        return this.init;
     }
}
export default BaseBuilder;
