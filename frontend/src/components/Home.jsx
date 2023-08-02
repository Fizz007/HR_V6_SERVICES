import React, { useEffect, useRef, useState } from "react";
import Items from "./Items";
import Loader from "./Loader";
import SignIn from "./Signin";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { baseUrl } from "../BaseUrl/Baseurl";


const PAGE_SIZE = 3;

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [user] = useAuthState(auth);

  const getImage = async () => {
    try {
      const res = await fetch(`${baseUrl}/images`);
      const data = await res.json();
      //   console.log(data.Image);
      setData(data.Image);
      setPage(1);
      setPaginatedData(data.Image.slice(0, PAGE_SIZE));
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getImage();
  }, []);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    const start = (newPage - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    setPaginatedData(data.slice(start, end));
  };
  return (
    <div className="main-content">
        <SignIn />
      {user ? (
      <section>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="item-container">
            {paginatedData &&
              paginatedData.map((item, index) => {
                return <Items item={item} data={data} index={index} key={index}/>;
              })}
          </div>
        )}
        {data.length > 0 ? (
          <div className="pagination">
            <button
              disabled={page === 1}
              onClick={() => handlePageChange(page - 1)}
            >
              Previous
            </button>
            <span className="pages">{page - 1}</span>
            <span className="pages" id="main-page">
              {page}
            </span>
            <span className="pages">{page + 1}</span>
            <button
              disabled={data.length <= page * PAGE_SIZE}
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </button>
          </div>
        ) : (
          <Loader/>
        )}
      </section>
       ) : (
        <div className="login-message">
          To access the images you are required to Login through Gmail!
        </div>
      )}
    </div>
  );
};

export default Home;
