fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => console.log(data))


// for loop dea akta akta country k niccci 

// name 

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        const countryDiv = document.createElement('div');
//         // countries name 
//         const name = document.createElement('h3');
//         name.innerText = country.name;
//         // countrisecapital country name
//         const capital = document.createElement('p');
//         capital.innerText = country.capital;
//         // conect to name and capital country name 
//         countryDiv.appendChild(h3);
//         countryDiv.appendChild(p);
        // countriesDsiv add to countryDiv
        countriesDiv.appendChild(countryDiv);

        countryDiv.className = 'country';

        const countryInfo = `
        <h3 class="country-name">${country.name}</h3>
        <p class>${country.capital}</p>
        `;
        countryDiv.innerHTML = countryInfo;
    
        


    }
}