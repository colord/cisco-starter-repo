import { useState, useEffect } from "react";

const Latency = () => {
  const [latency, setLatency] = useState(0);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:55455');
    socket.onmessage = event => {
      setLatency(Math.abs(Date.now() - event.data));
    };

    return () => {
      if (socket)
        socket.close();
    }
  }, []);

  return (
    <>
      <p className="small-metric">{latency}ms</p>
    </>
  )
};

export default Latency;