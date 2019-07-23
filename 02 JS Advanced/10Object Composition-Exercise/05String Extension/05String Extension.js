let extensions = (function () {
    String.prototype.ensureStart = function (subString) {

        if (!this.startsWith(subString)) {
            return `${subString}${this}`;
        }
        return this.toString();
    }

    String.prototype.ensureEnd = function (subString) {

        if (!this.endsWith(subString)) {
            return `${this}${subString}`;
        }
        return this.toString();
    }

    String.prototype.isEmpty = function () {
        return this.length === 0;
    }

    String.prototype.truncate = function (n) {
        if (n < 4) {
            return '.'.repeat(n);
        }

        if (n >= this.length) {
            return this.toString();
        }

        const lastIndexOfSpace = this.toString().substr(0, n - 2).lastIndexOf(' ');
        if (lastIndexOfSpace !== -1) {
            return this.substr(0, lastIndexOfSpace) + '...';
        } else {
            return this.substr(0, n - 3) + '...';
        }
    }

    String.format = function (string, ...params) {
        for (let index = 0; index < params.length; index++) {
            string = string.replace(`{${index}}`, params[index]);
        }
        return string;
    }
})()