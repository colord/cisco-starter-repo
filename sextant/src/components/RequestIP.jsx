import { useEffect, useState } from "react";

const RequestIP = ({ version }) => {
  const [ip, setIP] = useState('');

  useEffect(() => {
    const fetchIPAddress = async (version) => {
      try {
        const url = version === 'v4'
          ? 'https://api.ipify.org?format=json'
          : 'https://api64.ipify.org?format=json';
        const response = await fetch(url);
        const data = await response.json();
        setIP(data.ip);
      } catch (error) {
        console.error(error);
      }
    };

    fetchIPAddress(version);
  }, [version]);


  return (
    <>
      <p>{ip}</p>
    </>
  )
};

export default RequestIP