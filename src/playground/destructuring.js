const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: 'Penguin'
  }
};

const { name: publisherName = "Unknown" } = book.publisher;

console.log(publisherName);


const item = []

const [ coffee = "Ice coffee", , mediumCoffeePrice = "0.00"] = item;

console.log( `A medium ${coffee} costs ${mediumCoffeePrice}`);
