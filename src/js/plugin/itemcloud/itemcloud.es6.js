(function(){
  'use strict';

  class CloudItem {
    constructor(text) {
      this.text = text;
      this.color = Math.round(Math.random() * 155 + 100);
      this.size = Math.random() * 150 + 50;
    }

    render() {
      this.el = document.createElement('span');
      this.el.innerHTML = this.text;
      this.el.style.fontSize = this.size + '%';
      this.el.style.color = `rgb(${this.color}, ${this.color}, ${this.color})`;
      this.el.classList.add('clouditem');
      this.hasBeenPositenedRelatively = false;
      //window.addEventListener('click', this.mouseClick, true);
      return this.el;
    }

    saveOriginalCoords() {
      if (!this.hasBeenPositenedRelatively) {
        let rect = this.el.getBoundingClientRect();
        this.originalX = (rect.left + rect.right) / 2;
        this.originalY = (rect.top + rect.bottom) / 2;
        this.width = rect.width;
        this.height = rect.height;
        this.sizeMouseMove = (this.size / 200.0) * 5.0;
        this.hasBeenPositenedRelatively = true;
      }
    }

    mouseMove(e) {
      this.saveOriginalCoords();
      // gets distance from the mouse x and y and this element's coords
      var xDiff = e.clientX - window.innerWidth / 2.0,
          yDiff = e.clientY - window.innerHeight / 2.0;

      this.el.style.position = 'absolute';
      this.el.style.left = (this.originalX - xDiff/this.sizeMouseMove - this.width)  + 'px';
      this.el.style.top = (this.originalY - yDiff/this.sizeMouseMove - this.height) + 'px';
    }

    mouseClick(e) {
      var xDiff = e.clientX - window.innerWidth / 2.0,
          yDiff = e.clientY - window.innerHeight / 2.0;
      window.alert('e.clientX: ' + e.clientX + ' | e.clientY: ' + e.clientY + ' | xDiff: ' + xDiff + ' | yDiff: ' + yDiff + ' | sizeMouseMove: ' + this.sizeMouseMove);
    }
  }

  class Cloud {
    constructor(el) {
      this.el = el;
      this.el.classList.add('itemcloud');
      this.textItems = this.el.innerHTML.split('\n-');
      this.buildCloudItems();
    }

    buildCloudItems() {
      this.el.innerHTML = '';
      this.items = [];
      for (let text of this.textItems) {
        text = text.trim();
        if (text !== '') {
          let newItem = new CloudItem(text);
          this.items.push(newItem);
          this.el.appendChild(newItem.render());
        }
      }
      var self = this;
      document.body.onmousemove = function(e) {
        self.mouseMove(e);
      };
    }

    mouseMove(e) {
      for (var i = this.items.length - 1; i >= 0; i--) {
        this.items[i].mouseMove(e);
      }
    }
  }


  var itemCloudSlides = document.querySelectorAll('[data-state="itemcloud"]');

  [].forEach.call(itemCloudSlides, function(el) {
    new Cloud(el);
  });

}());