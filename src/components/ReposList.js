import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ReposList = () => {
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchRepos = async () => {
      const result = await axios(
        `https://api.github.com/users/JACKDANYELLE/repos?page=${currentPage}&per_page=20`
      );
      setRepos(result.data);
    };

    fetchRepos();
  }, [currentPage]);

  console.log(repos);

  console.log(searchValue);

  //Pagination, search and filter logic goes here
  //  Handle Search Functionality
  const searchedRepo = repos.filter((repo) =>
    repo?.full_name.includes(searchValue)
  );

  return (
    <div className="main">
      <h1>My Repo's List</h1>

      <input
        type="search"
        placeholder="Search repo"
        name="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <div>
        {searchedRepo?.length ? (
          searchedRepo.map((repo) => (
            <Link to={`/repo/${repo.id}`} key={repo?.id}>
              <li>{repo?.full_name}</li>
            </Link>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default ReposList;
