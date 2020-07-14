import React from 'react';
import PropTypes from 'prop-types';
import ContestPreview from './ContestPreview';

const ContestList = ({contests, onContestClick})=>{
    return (
        <div className="ConstestList">
            {Object.keys(contests).map(contestId=>
                <ContestPreview 
                key={contestId}
                onClick={onContestClick}
                {...contests[contestId]} />
            )}
        </div>
    )
}

ContestList.propTypes = {
    contests: PropTypes.object,
    onContestClick: PropTypes.func.isRequired,
};

export default ContestList;