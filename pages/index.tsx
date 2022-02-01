import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import marvelData from "../services/marvelData";

const mockData = require("../mock/marvelMockData.json");

type character = {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};

const Home: NextPage = () => {
  const [results, setResults] = useState([]);

  /*
  useEffect(() => {
    marvelData
      .get("/characters", {
        params: {
          limit: 2,
        },
      })
      .then(({ data }) => {
        setResults(data);
      })
      .catch((e) => console.log(e));
  }, []);

  */

  console.log(mockData.map((e: any) => e));
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {mockData.map(({ id, name, description, thumbnail }: character) => {
        return (
          <div key={id}>
            <img
              src={`${thumbnail.path}/standard_fantastic.${thumbnail.extension}`}
              alt="dsa"
            />
            <h1>{name}</h1>
            <p>{description || "Sem desc."}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
