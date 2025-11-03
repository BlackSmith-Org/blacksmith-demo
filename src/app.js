const { add, multiply, greet } = require('./utils');

function main() {
  console.log('Blacksmith Demo Application');
  console.log('===========================');
  
  console.log(greet('Blacksmith'));
  console.log(`2 + 3 = ${add(2, 3)}`);
  console.log(`4 * 5 = ${multiply(4, 5)}`);
  
  const result = processData([1, 2, 3, 4, 5]);
  console.log(`Processed data: ${result}`);
  
  return 'Application completed successfully';
}

function processData(data) {
  return data.reduce((acc, val) => acc + val, 0);
}

module.exports = { main, processData };

if (require.main === module) {
  main();
}
