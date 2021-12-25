import React, { useState } from 'react';
import Help from '../UI/Help';
import './Controller.css';

export default function Controller(props) {
  const [needHelp, setNeedHelp] = useState(false);

  const helpHandler = () => {
    setNeedHelp(true);
  }
  const closeHelp = () => {
    setNeedHelp(false);
  }

  return (
    <React.Fragment>
      {needHelp && <Help onClose={closeHelp} />}
      <div className="side_barHeader">
        <div >
          {`Question ${props.currentPage}/${props.totalQuestions}`}
        </div>
        <div className="side_barHelp">
          <button onClick={helpHandler} className="help_btn">Need Help ?</button>
        </div>
      </div>
    </React.Fragment>
  )
}
