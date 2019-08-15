import { useState, useEffect } from "react";
// const api = 'https://us-central1-gndx-cv.cloudfunctions.net/me'
const api =
  "https://raw.githubusercontent.com/andru2400/curriculumvitae/develop/src/data/data.json";

const useGetData = () => {
  const [mydata, setData] = useState([]);

  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(data => setData(data[0]));
  }, []);
  return mydata;
};

export default useGetData;
