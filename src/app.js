/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let emails = getPermutations();
  let tableBody = document.getElementById("tableBody");
  let counter = 1;
  for (let email of emails) {
    console.log(email + "\n");
    tableBody.innerHTML += `
    <tr>
      <th scope="row">${counter++}</th>
      <td>${email}</td>
    </tr>
    `;
  }
};

function getPermutations() {
  let emails = [];
  let pronouns = ["the", "our"];
  let adjetives = ["great", "big", "new"];
  let nouns = ["jogger", "racoon", "house"];
  let domains = ["com", "net", "org", "io", "us"];
  for (let pronoun of pronouns) {
    for (let adjetive of adjetives) {
      for (let noun of nouns) {
        for (let domain of domains) {
          emails.push(`${pronoun}${adjetive}${noun}@${domain}`);
        }
      }
    }
  }
  return emails;
}
