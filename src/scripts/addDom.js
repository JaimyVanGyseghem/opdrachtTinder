import '../styles/main.css'

export function addToDOM(result) {
  photo.src = `${result.results[0].picture.large}`;
  console.log(result.results[0].picture.large);
  let date = moment(result.results[0].dob.date, 'YYYY-MM-DD');
  console.log(date);
  text.innerHTML = `
  <h1 id="fistName">${result.results[0].name.first}</h1>
  <h2 id="name">${date.format('MMM')}</h2>
  <p id="age">${result.results[0].dob.age}</p>
  `
}