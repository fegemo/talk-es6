var $__Object = Object, $__getOwnPropertyNames = $__Object.getOwnPropertyNames, $__getOwnPropertyDescriptor = $__Object.getOwnPropertyDescriptor, $__getDescriptors = function(object) {
  var descriptors = {}, name, names = $__getOwnPropertyNames(object);
  for (var i = 0; i < names.length; i++) {
    var name = $traceurRuntime.elementGet(names, i);
    $traceurRuntime.elementSet(descriptors, name, $__getOwnPropertyDescriptor(object, name));
  }
  return descriptors;
}, $__createClassNoExtends = function(object, staticObject) {
  var ctor = object.constructor;
  Object.defineProperty(object, 'constructor', {enumerable: false});
  ctor.prototype = object;
  Object.defineProperties(ctor, $__getDescriptors(staticObject));
  return ctor;
};
(function() {
  'use strict';
  var CloudItem = function() {
    'use strict';
    var $CloudItem = ($__createClassNoExtends)({
      constructor: function(text) {
        this.text = text;
        this.color = Math.round(Math.random() * 155 + 100);
        this.size = Math.random() * 150 + 50;
      },
      render: function() {
        this.el = document.createElement('span');
        this.el.innerHTML = this.text;
        this.el.style.fontSize = this.size + '%';
        this.el.style.color = ("rgb(" + this.color + ", " + this.color + ", " + this.color + ")");
        this.el.classList.add('clouditem');
        return this.el;
      }
    }, {});
    return $CloudItem;
  }();
  var Cloud = function() {
    'use strict';
    var $Cloud = ($__createClassNoExtends)({
      constructor: function(el) {
        this.el = el;
        this.el.classList.add('itemcloud');
        this.textItems = this.el.innerHTML.split('\n-');
        this.buildCloudItems();
      },
      buildCloudItems: function() {
        this.el.innerHTML = '';
        this.items = [];
        for (var $__1 = $traceurRuntime.getIterator(this.textItems), $__2; !($__2 = $__1.next()).done;) {
          try {
            throw undefined;
          } catch (text) {
            text = $__2.value;
            {
              text = text.trim();
              if (text !== '') {
                try {
                  throw undefined;
                } catch (newItem) {
                  newItem = new CloudItem(text);
                  this.items.push(newItem);
                  this.el.appendChild(newItem.render());
                }
              }
            }
          }
        }
      }
    }, {});
    return $Cloud;
  }();
  var itemCloudSlides = document.querySelectorAll('[data-state="itemcloud"]');
  [].forEach.call(itemCloudSlides, function(el) {
    new Cloud(el);
  });
}());
