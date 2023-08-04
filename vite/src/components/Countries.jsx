import React from 'react';
import {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';

function Countries() {
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState('');
  const regions = [
    {name: 'Africa'},
    {name: 'Americas'},
    {name: 'Antarctic'},
    {name: 'Asia'},
    {name: 'Europe'},
    {name: 'Oceania'},
  ];

  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await fetch('https://restcountries.com/v3.1/all');
        const data = await res.json();

        console.log(data);
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    };
    getCountries();
  }, []);
  async function searchCountry() {
    console.log(searchText);
    // if (searchText.(',')) {
    //   // navigate('*');
    //   alert('not accepted');
    // }
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${searchText}`
      );

      const data = await res.json();
      if (res.ok) {
        setCountries(data);
      } else {
        alert('no country found');
      }
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleSearchCountry(e) {
    e.preventDefault();
    searchCountry();
  }

  async function filterByRegion(region) {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
      );
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.error(error);
    }
  }
  function handleFilterByRegion(e) {
    e.preventDefault();
    filterByRegion();
  }

  return (
    <>
      {/* ==================================== */}

      <section className='filter'>
        <form
          onSubmit={handleSearchCountry}
          autoComplete='off'
          className='form-control'>
          <input
            type='text'
            name='search'
            id='search'
            placeholder='search country'
            required
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </form>

        <form onSubmit={handleFilterByRegion} className='region-filter'>
          <select
            name='filter-by-region'
            className='select'
            id='filter-by-region'
            value={regions.name}
            onChange={(e) => filterByRegion(e.target.value)}>
            {regions.map((region, index) => (
              <option key={index} value={region.name}>
                {region.name}
              </option>
            ))}
          </select>
        </form>
      </section>
      {/* ==================================== */}
      <section className='grid'>
        {countries.map((country, index) => {
          // const {name, population, region, subregion, capital, flags, ccn3} =
          //   country;
          const {name, flags} = country;
          return (
            <React.Fragment key={index}>
              <Link to={`/name/${name.common}`} className='card'>
                <article className='card'>
                  {/* <div> */}
                  <img src={flags.svg} alt={name} />

                  <div className='details'>
                    <h3>
                      <span>{name.common}</span>
                    </h3>

                    <p> Click card for details</p>

                    {/* <Link to={`/${name.common}`} className='btn show-details'>
                        Show details
                      </Link> */}
                  </div>
                  {/* </div> */}
                </article>
              </Link>
            </React.Fragment>
          );
        })}
      </section>
    </>
  );
}

export default Countries;
