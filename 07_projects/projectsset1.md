# Projects related to DOM 

## project link
[Click here](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqazVobWdLSFJPX25MVnNUOHRoOHE0dXZnVDd6d3xBQ3Jtc0tudVVwZTNCU2IyUEJzZU9MdXJCOVpESm5lMnFKaFFRZGtsSDN0aHRfUTJaTEdxQmJMSFEya0p5dDlPa1pxRVRLdjExZ0MydlZDSTVvdU9fd2hmVUJUNy1KR1FNcUZCRDFwR1lYa1BReFljWWw4aGpMZw&q=https%3A%2F%2Fgithub.com%2Fhiteshchoudhary%2F&v=EGqHVjU-fas)

# Solution Code

## project1
 ```javascript
 const button = document.querySelectorAll('.button');
const body = document.querySelector('body');
console.log(button);
button.forEach(function button(button) {
  console.log(button);
  button.addEventListener('mouseover', function (e) {
    console.log(e);
    console.log(e.target);
    switch (e.target) {
      case grey:
        body.style.backgroundColor = e.target.id;
        break;
      case yellow:
        body.style.backgroundColor = e.target.id;
        break;
      case blue:
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});

 ```

 ## project 2
 ```javascript
 const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.getElementById('height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  if (height === '' || height <= 0 || height == 'Nan') {
    result.innerHTML = `enter a valid height, you have entered ${height}`;
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    result.innerHTML = `enter a valid weight, you have entered ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let category = '';
    if (bmi < 18.6) category = 'Under Weight';
    else if (bmi >= 18.6 && bmi <= 24.9) category = 'Normal Range';
    else category = 'Overweight';
    result.innerHTML = `<span>${bmi}<br>${category} </span`;
  }
});
 ```

 ## project 3
 ```javascript
 ```