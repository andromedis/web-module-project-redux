// Library imports
import React from 'react';
import { connect } from 'react-redux';

// Action imports
import { addFeature } from '../actions';

// Components
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
  const { addFeature } = props;

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} addFeature={addFeature}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures,
  }
}

export default connect(mapStateToProps, { addFeature })(AdditionalFeatures);
