const
    md5File = require("md5-file"),
    fs = require('fs'),
    path = require('path');

module.exports = {
    md5Set: new Set([]),
    initDirs: [],
    init(dirs) {
        if (!Array.isArray(dirs)) return;
        this.initDirs = dirs;
        for (let dir of dirs) {
            this.walk(dir, (err, results) => {
                if (err) throw err;
                for (let dir of results) {
                    const hash = md5File.sync(dir)
                    this.md5Set.add(hash);
                }
                // console.log(this.md5Set);
            });
        }
    },
    reInit() {
        if (!this.initDirs) return;
        this.md5Set.clear();
        this.init(this.initDirs);
    },
    // 过滤掉旧文件
    do(dir, cb) {
        this.walk(dir, (err, results) => {
            if (err) throw err;
            // console.log("results=", results);
            for (let dir of results) {
                const hash = md5File.sync(dir)
                if (this.md5Set.has(hash)) {
                    fs.unlinkSync(dir);
                } else {
                    let paths = dir.split('/');
                    if (paths.length < 1) continue;
                    // console.log("src=", dir);
                    // console.log("dest=", this.destination(dir));
                    fs.rename(dir, this.destination(dir), (e) => {
                        if (e) console.log(e);
                    })
                    console.log("update file: ", paths[paths.length - 1]);
                }
            }
            cb && cb();
            this.reInit();
        });
    },
    destination(source) {
        return source.replace(/local-preview\//g, '');
    },
    walk(dir, done, options = {
        ignore: null,
        includingDir: false
    }) {
        let results = [];
        let ignore = options.ignore;
        let includingDir = options.includingDir;

        fs.readdir(dir, (e, list) => {
            if (e) return done(e);
            let pending = list.length;
            if (!pending) return done(null, results);
            list.forEach((file) => {
                file = path.resolve(dir, file);
                if (ignore && ignore instanceof RegExp && ignore.test(file)) {
                    // console.log("walk #ignore >>>> ", ignore, file);
                    if (!--pending) done(null, results);
                } else {
                    fs.stat(file, (e, stat) => {
                        if (stat && stat.isDirectory()) {
                            if (includingDir) {
                                results.push(file);
                            }
                            this.walk(file, (e, res) => {
                                results = results.concat(res);
                                if (!--pending) done(null, results);
                            }, options);
                        } else {
                            results.push(file);
                            if (!--pending) done(null, results);
                        }
                    });
                }
            });
        });
    }
}
