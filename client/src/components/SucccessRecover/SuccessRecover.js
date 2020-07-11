import React, { useEffect } from 'react';

const SuccessRecover = (props) => {
  const {isFetching, error, data, token, history, recoverPassword} = props;
  useEffect(() => {
    if (!isFetching && !error && !data) {
      console.log(props.token);
      recoverPassword({token});
    }
    if (data) {
      setTimeout(() => history.replace('/login'), 5000);
    }
  }, [data]);
  return (
    <>
      {data && <div> Password update. If you steel see this window try to change password one more time </div>}
    </>

  );
};

export default SuccessRecover;
