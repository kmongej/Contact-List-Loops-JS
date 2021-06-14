const contacts = ['Chris: 86424115', 'Sarah: 89532215', 'Bill: 65778574', 'Mary: 84217877', 'Diana: 88514548'];

const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
  const searchName = input.value.toLowerCase();
  input.value = '';
  input.focus();
  
  for (let i = 0; i < contacts.length; i++) {
      let splitContact = contacts[i].split(':');
      if(splitContact[0].toLowerCase() === searchName) {
          para.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
          break;
      } else if(i === contacts.length -1) {
          para.textContent = 'Contact not found';
      }
    }
});
 