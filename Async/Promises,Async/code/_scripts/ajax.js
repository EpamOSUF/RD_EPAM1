// add global variable containing XHR object here
let httpRequest = new XMLHttpRequest();

// add get() function here
// function getData(url, success, fail) {
//     httpRequest.open('GET',url);
//     httpRequest.onload = function(){
//         if(httpRequest.status === 200){

//             success(httpRequest.responseText);
//         }else{
//             fail(httpRequest.status)
//         }
//     }
//     httpRequest.send();
// }

function getDataPromise(url) {
    return new Promise(function(resolve, reject) {
        let httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', url);
        httpRequest.onload = function() {
          if (httpRequest.status === 200) {
            resolve(httpRequest.response);
          } else {
            //   401 as example
            reject(Error(httpRequest.statusText));
          }
        };
    
        // handle net erros
        httpRequest.onerror = function() {
          reject(Error('Network Error'));
        };
    
        httpRequest.send();
      });
}


function tempToF(kelvin) {
    return ((kelvin - 273.15) * 1.8 + 32).toFixed(0);
}


function successHandler(data) {
    const dataObj = JSON.parse(data);
    // const weatherDiv = document.querySelector('#weather');
    const div = `
        <h2 class="top">
        <img
            src="http://openweathermap.org/img/w/${dataObj.weather[0].icon}.png"
            alt="${dataObj.weather[0].description}"
            width="50"
            height="50"
        />${dataObj.name}
        </h2>
        <p>
        <span class="tempF">${tempToF(dataObj.main.temp)}&deg;</span> | ${dataObj.weather[0].description}
        </p>
    `;
    
    return div;
    // weatherDiv.innerHTML = weatherFragment;
}

function failHandler(status) {
    console.log(status);
}

const locations = [
    'zacatecas,mx',
    'colima,mx'
]

document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'd7af02efc64d734e5495dbe52ca3d403';
    const weatherDiv = document.querySelector('#weather');

    // const url = 'https://api.openweathermap.org/data/2.5/weather?lat=22.77228761702367&lon=-102.57323980739676&APPID=' + apiKey;

    const urls = locations.map( location => {
        return `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`;
    })

    // add get() function call here
    // getData(url, successHandler, failHandler);
    // successHandler(httpRequest.responseText);
    // getDataPromise(url)

    let promise1 = getDataPromise(urls[0]);
    let promise2 = getDataPromise(urls[1]);

    // Promise all handles an array of multiple promises
    // its really useful if you want to check different request (in case your using ajax)
    // Promise.all([promise1, promise2])
    //     .then(function(responses) {
    //         return responses.map(function(response) {
    //         return successHandler(response);
    //         });
    //     })
    //     .then(function(literals) {
    //         weatherDiv.innerHTML = `<h1>Weather</h1>${literals.join('')}`;
    //     })
    //     .catch(function(status) {
    //         failHandler(status);
    //     })
    //     .finally(function() {
    //         weatherDiv.classList.remove('hidden');
    //     });

    (async function (params) {
        try {
            let responses = [];
            responses.push(await getDataPromise(urls[0]));
            responses.push(await getDataPromise(urls[1]));       
    
            let literals = responses.map(function(response) {
                    return successHandler(response);
                });
            weatherDiv.innerHTML = `<h1>Weather</h1>${literals.join('')}`;
        } catch (status) {
                failHandler(status);
        }
            finally{
                weatherDiv.classList.remove('hidden'); 
            }
    })();
});