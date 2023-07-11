const data = require('./data.json');

const restructureData = (data) => {
  const countries = {};
  for (const service of data.result) {
    const country = service.countries.keys()[0];
    if (!countries[country]) {
      countries[country] = [];
    }
    countries[country].push(service);
  }
  return countries;
};

const countries = restructureData(data);

for (const country in countries) {
  const services = countries[country];
  console.log(`Country: ${country}`);
  for (const service of services) {
    console.log(`  - ${service.displayName}`);
  }
}
