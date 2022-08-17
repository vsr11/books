const RatingList = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 20,
    width: "60%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    marginTop: 10,
    marginLeft: 30,
    textAlign: "left",
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
    </div>
  );
};

export default RatingList;
