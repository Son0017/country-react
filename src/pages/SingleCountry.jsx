import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getData } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
function SingleCountry() {
  const { id } = useParams();

  const { data, isPending, error } = getData(
    `https://restcountries.com/v3.1/alpha/${id}`
  );

  let navigate = useNavigate();

  const handleNavigate = (itemId) => {
    navigate(`/country/${itemId}`);
  };

  let {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
    flags,
  } = {
    name: data && data[0].name.common,
    nativeName: data && Object.values(data[0].name.nativeName)[0].common,
    population: data && data[0].population,
    region: data && data[0].region,
    subregion: data && data[0].subregion,
    capital: data && data[0].capital ? data[0].capital : "No capital",
    tld: data && data[0].tld,
    currencies: data && Object.values(data[0].currencies)[0].name,
    languages: data && Object.values(data[0].languages),
    borders: data && data[0].borders ? data[0].borders : ["No Borders"],
    flags: data && data[0].flags.svg,
  };
  // console.log(data);
  //

  return (
    <>
      {isPending && <Loading />}
      {error && <div>{error}</div>}
      {data && (
        <div>
          <div className="w-[136px] bg-white shadown text-center py-3 rounded ">
            <Link className="block" to="/">
              Back
            </Link>
          </div>
          <div className="flex xl:items-center justify-between flex-col xl:flex-row xl:gap-[120px] gap-[50px] py-[80px]">
            <div className="img">
              <img src={flags} alt="" />
            </div>
            <div className=" xl:grow">
              <h2 className="text-4xl font-extrabold mb-[30px]">{name}</h2>
              <div className="flex flex-col sm:flex-row gap-[20px] justify-between capitalize text-base mb-[70px]">
                <div className="flex flex-col ">
                  <p>
                    <b>native name: </b>
                    <span>{nativeName}</span>
                  </p>
                  <p>
                    <b>population: </b>
                    <span>{population}</span>
                  </p>
                  <p>
                    <b>region: </b>
                    <span>{region}</span>
                  </p>
                  <p>
                    <b>sub region: </b>
                    <span>{subregion}</span>
                  </p>
                  <p>
                    <b>capital: </b>
                    <span>{capital}</span>
                  </p>
                </div>
                <div className="flex flex-col ">
                  <p>
                    <b>top level damain: </b>
                    <span>{tld}</span>
                  </p>
                  <p>
                    <b>currencies: </b>
                    <span>{currencies}</span>
                  </p>
                  <p>
                    <b>language: </b>
                    <span>
                      {languages &&
                        languages.map((item) => {
                          return <span>{item}, </span>;
                        })}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex  gap-2">
                <p>Border Countries: </p>
                <div className="gridEL grow">
                  {borders &&
                    borders.map((item) => {
                      return (
                        <div
                          onClick={() => {
                            handleNavigate(item);
                          }}
                          className="px-7 bg-white rounded shadown cursor-pointer"
                        >
                          {item}
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleCountry;
