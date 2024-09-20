const withPromotedLabel = (WrappedComponent) => {
  return (props) => {
    return (
      <div>
        <label className="Open-label">Open Now</label>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withPromotedLabel;
