// window.matchMedia = window.matchMedia || function() {
//     return {
//     matches : false,
//     addListener : function() {},
//     removeListener: function() {}
//     };
// };

window.matchMedia =
    window.matchMedia ||
    function() {
        return {
            matches: false,
            addListener: function() {},
            removeListener: function() {}
        };
    };
