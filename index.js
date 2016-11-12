import express from 'express';
import cors from 'cors';
import fetch from  'isomorphic-fetch';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});

app.get('/task2A',(req, res) => {
  const sum =(+req.query.a||0) + (+req.query.b||0);
  res.send(sum.toString());
});


app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});

function capitalize(nameParts) {
  let result = '';

  if (nameParts.length === 3) {
    result = nameParts[2] + ' ' + nameParts[0][0].toUpperCase() + '. ' + nameParts[1][0].toUpperCase() + '.';
  } else if (nameParts.length === 2) {
    result = nameParts[1] + ' ' + nameParts[0][0].toUpperCase() + '.';
  } else {
    result = nameParts[0];
  }
  return result;
}

app.get('/task2B', (req, res) => {
  let response = '';

  const fullname = req.query.fullname;
  if (fullname === undefined || fullname.length === 0) {
    response = 'Invalid fullname';
  }

  const  wer= /[0-9]/.test(fullname);

  if (wer == true)
  {
      response = 'Invalid fullname';
  }
  else   if(fullname.length === 0) {
     response = 'Invalid fullname';
  }
    else {
    const nameParts = fullname.split(' ');
    if (nameParts.length > 3 || nameParts.length === 0) {
      response = 'Invalid fullname';
    } else {
      response = capitalize(nameParts);
    }
  }
  res.send(response);
});

app.get('/task2c',(req, res) => {
	function fullname(){
		const query = req.query.username ? req.query.username: "";
		const myRe = /^(?:https?\:)?\@*(?:(?:\/\/)?.*?\/)?\@*(.*?)(?:(?:\?|\/).*)?$/;
		const nameArray = query.match(myRe);
		if (nameArray.lenght == 0){
			return "invalid username";console.log(nameArray);
			}
			else{
			const username = `@${nameArray[1]}`;

			return username;};
	}
	res.send(fullname());


});


