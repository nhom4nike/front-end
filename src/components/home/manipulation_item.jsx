import React from 'react';
import PropTypes from 'prop-types';
import './manipulation_item.less';

const renderFeatures = (data) => data.map((element) => (
    <span className="manipulation-item__feature">{element}</span>
  ));

const ManipulationItem = ({ data }) => (
    <div className="manipulation-item">
      <div className="manipulation-item__wrap-image">
        <img className="manipulation-item__image" src={data.url} alt="item" />
      </div>

      <span className="manipulation-item__title">{data.title}</span>
      <div className="manipulation-item__wrap-feature">
        {renderFeatures(data.features)}
      </div>
    </div>
  );

ManipulationItem.propTypes = {
  data: PropTypes.objectOf({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    features: PropTypes.array.isRequired,
  }).isRequired,
};

export default ManipulationItem;
