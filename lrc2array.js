function parseLyric(text) {
    var lines = text.split('\n'),
        pattern = /\[\d{2}:\d{2}.\d{2}\]/g,
        result = [];
    while (!pattern.test(lines[0])) {
        lines = lines.slice(1)
    };
    lines[lines.length - 1].length === 0 && lines.pop();
    lines.forEach(function(v, i, a) {
        var time = v.match(pattern),
            value = v.replace(pattern, '');
        time.forEach(function(v1, i1, a1) {
            var t = v1.slice(1, -1).split(':');
            result.push([parseInt(t[0], 10) * 60 + parseFloat(t[1]), value])
        })
    });
    result.sort(function(a, b) {
        return a[0] - b[0]
    });
    return result
}