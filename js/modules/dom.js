export class DOM {

  // DOM MANIPULATION
  // ---------------------------------------------- //

  css(param, value = false) {
    if (typeof param === "object") {

      this.forEach(el => {
        for (let key in param) {
          el.style[key] = param[key];
        }
      });

    } else {
      this.forEach(el => {
        el.style[param] = value;
      });
    }
    return this;
  }

  text(text) {
    if (typeof text !== "undefined") {
      return this.forEach(el => {
        el.innerText = text;
      });
    } else {
      return this.mapOne(el => el.innerText);
    }
  }

  html(html) {
    if (typeof html !== "undefined") {
      return this.forEach(el => {
        el.innerHTML = html;
      });
    } else {
      return this.mapOne(el => el.innerHTML);
    }
  }

  addClass(classes) {
    let className = "";
    if (typeof classes !== 'string') {
      for (let i = 0; i < classes.length; i++) {
        className += ` ${classes[i]}`;
      }
    } else {
      className = ` ${classes}`;
    }
    return this.forEach(el => {
      el.className += className;
    });
  }

  removeClass(className) {
    return this.forEach(el => {
      let cs = el.className.split(' ');
      let i;

      while ((i = cs.indexOf(className)) > -1) {
        cs = cs.slice(0, i).concat(cs.slice(++i));
      }
      el.className = cs.join(' ');
    });
  }

  attr(attr, val) {
    if (typeof val !== 'undefined') {
      return this.forEach(el => {
        el.setAttribute(attr, val);
      });
    } else {
      return this.mapOne(el => el.getAttribute(attr));
    }
  }

  append(els) {
    return this.forEach((parEl, i) => {
      els.forEach(childEl => {
        parEl.appendChild((i > 0) ? childEl.cloneNode(true) : childEl);
      });
    });
  }

  prepend(els) {
    return this.forEach((parEl, i) => {
      for (let j = els.length - 1; j > -1; j--) {
        parEl.insertBefore((i > 0) ? els[j].cloneNode(true) : els[j], parEl.firstChild);
      }
    });
  }

  remove() {
    return this.forEach(el => el.parentNode.removeChild(el));
  }
}
