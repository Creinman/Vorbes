var Nroll = /** @class */ (function () {
    function Nroll() {
        (function (a, b, c, d, e, f, g, h) {
            g = b.createElement(c);
            g.src = d;
            g.type = "application/javascript";
            g.async = !0;
            h = b.getElementsByTagName(c)[0];
            h.parentNode.insertBefore(g, h);
            a[f] = [];
            a[e] = function () {
                a[f].push(Array.prototype.slice.apply(arguments));
            };
        })(window, document, "script", "https://cdn01.nativeroll.tv/js/seedr-player.min.js", "SeedrPlayer", "seedrInit");
    }
    Nroll.prototype.insertPlayer = function () {
        // console.log(id);
        var playerId = 'nroll' + Math.ceil(Math.random() * 100000);
        console.log(playerId);
        var $nra = $('div[data-nativeroll=anchor]');
        $nra.addClass(playerId).removeAttr('data-nativeroll');
        this.start(playerId);
        return;
    };
    Nroll.prototype.start = function (id) {
        SeedrPlayer({
            debug: true,
            container: '.' + id,
            gid: '54bd188df88cafee448b4567',
            onLoad: function () {
                console.log('NR player[' + id + ']: ready');
            },
            onVideoStart: function () {
                console.log('NR player[' + id + ']: playback started');
            },
            onVideoComplete: function () {
                console.log('NR player[' + id + ']: playback сompleted');
            },
            onError: function (e) {
                console.log('NR player[' + id + ']: error ', e);
            }
        });
    };
    return Nroll;
}());
var Adman = /** @class */ (function () {
    function Adman() {
    }
    Adman.prototype.inpage = function (id, callback) {
        console.log(id);
        var $e = $(id);
        var $p = $e.parents('.headline').find('.body-bpb > p');
        var middlePosition = Math.ceil(($p.length - ($p.length % 2)) / 2);
        $p.eq(middlePosition).after($e);
        if (callback) {
            callback(id);
        }
    };
    return Adman;
}());
//# sourceMappingURL=adman.js.map