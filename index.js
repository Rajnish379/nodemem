const MEMCACHED = require("memcached");
const serverPool = new MEMCACHED(["localhost:11211"]);

function run() {
    [1,2,3,4,5,6,7,8,9].forEach(a => serverPool.set("foo" + a, "bar" + a, 3600,err => console.log(err)));
}

run();

function read() {
    [1,2,3,4,5,6,7,8,9].forEach (a => serverPool.get("foo" + a,(err,data) => console.log(data)));
}

read();

// Use telnet localhost 11211 to run your memcache server

