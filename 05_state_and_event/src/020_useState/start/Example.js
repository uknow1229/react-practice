import { useState } from 'react';

const Example = () => {
  let ValArry = useState(0);

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          const setFn = ValArry[1];
          setFn(e.target.value);
        }}
      />
      = {ValArry[0]}
    </>
  );
};

export default Example;
