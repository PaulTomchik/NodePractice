var uint32 = new Uint32Array([ +process.argv[2] ]);

console.log(JSON.stringify(new Uint16Array(uint32.buffer)));


