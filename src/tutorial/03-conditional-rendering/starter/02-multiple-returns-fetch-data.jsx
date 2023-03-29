import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [larson, setLarson] = useState(null);

  useEffect(()=>{
    const getLarson = async () => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        const data = await resp.json()
        setLarson(data)
      } catch (error) {
        setIsError(true)
        //console.log(error);
      };
      setIsLoading(false);
    };
    getLarson();
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>There was an error...</h2>
  }

  const {avatar_url, bio, company, login} = larson
  return (
    <>
      <img src={avatar_url} width='150px' style={{borderRadius:'2rem'}}></img>
      <h2>{login}</h2>
      <h2>{bio}</h2>

    </>
  )
};
export default MultipleReturnsFetchData;
