module.exports = function(fns, context) {
  var args = [].slice.call(arguments, 2);
  fns.forEach(function(fn) {
    fn.apply(context, args);
  });
};

