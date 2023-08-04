import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';

function CountryDetail() {
  const [country, setCountry] = useState([]);
  const {name} = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        // const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${name}?fullText=true`
        );
        const data = await res.json();
        if (res.ok) {
          setCountry(data);
        }
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountryData();
  }, [name]);

  return (
    <>
      <section className='country'>
        {country.map((country, index) => {
          const {
            flags,
            name,
            capital,
            population,
            region,
            subregion,

            borders,
          } = country;
          return (
            <React.Fragment key={index}>
              <Link to='/' className='btn' style={{marginTop: '5px'}}>
                &larr; Back home
              </Link>

              <article key={index} className='single-country-container'>
                {/* <div> */}
                <div>
                  <img
                    style={{
                      width: '640px',
                      height: '400px',
                      margin: '10px 20px 20px 50px',
                    }}
                    className='single-flag'
                    src={flags.svg}
                    alt={name}
                  />
                </div>

                <div className='country-details'>
                  <h2>{name.common}</h2>
                  <h3>
                    Population:
                    <span style={{fontSize: '15px', margin: '5px'}}>
                      {population.toLocaleString()}
                    </span>
                  </h3>
                  <h3>
                    Region:
                    <span style={{fontSize: '15px', margin: '5px'}}>
                      {region}
                    </span>
                  </h3>
                  <h3>
                    Subregion:
                    <span
                      style={{
                        fontSize: '15px',

                        margin: '5px',
                      }}>
                      {subregion}
                    </span>
                  </h3>
                  <h3>
                    Capital:{' '}
                    <span style={{fontSize: '15px', margin: '5px'}}>
                      {capital}
                    </span>
                  </h3>

                  {borders && (
                    <>
                      <h3>Borders:</h3>
                      <ul
                        style={{
                          listStyleType: 'none',
                          margin: '10px 20px 20px 50px',
                        }}>
                        {borders.map((border, index) => (
                          <li style={{Color: 'blue'}} key={index}>
                            {border}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {/* ============================================== */}
                </div>
              </article>
            </React.Fragment>
          );
        })}
      </section>
    </>
  );
}

export default CountryDetail;
