//Operador AND
let afirmacion = true;
let negacion = false;

console.warn(`Operador AND '&&'`);
console.log(`${negacion} && ${negacion} = ${negacion && negacion}`);
console.log(`${negacion} && ${afirmacion} = ${negacion && afirmacion}`);
console.log(`${afirmacion} && ${negacion} = ${afirmacion && negacion}`);
console.log(`${afirmacion} && ${afirmacion} = ${afirmacion && afirmacion}`);

console.warn(`Operador OR '||'`);
console.log(`${negacion} || ${negacion} = ${negacion || negacion}`);
console.log(`${negacion} || ${afirmacion} = ${negacion || afirmacion}`);
console.log(`${afirmacion} || ${negacion} = ${afirmacion || negacion}`);

console.warn(`Operador NOT '!'`);
console.log(`not negacion = ${! negacion}`);
console.log(`not afirmacion = ${! afirmacion}`);