import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

const RepoDetails = () => {
  const [repoDetails, setRepoDetails] = useState({});
  const { repoId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const fetchRepoDetails = async () => {
    try {
      setIsLoading(true);
      const result = await Axios.get(
        `https://api.github.com/repositories/${repoId}`
      );
      setRepoDetails(result.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRepoDetails();
  }, [repoId]);

  // The details to render on the UI are in the repoDetails state
  console.log(repoDetails);
  if (isLoading) {
    return <div style={{ textAlign: "center" }}>Loading....</div>;
  }
  return (
    <div>
      <h2> Repo Details for {repoDetails?.full_name}</h2>
    </div>
  );
};

export default RepoDetails;
