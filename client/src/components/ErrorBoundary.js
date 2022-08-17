import React from "react";

class CustomErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: "",
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error: error,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Error from componentDidCatch: ", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>An error has occurred!</h1>
          {/* <div>{this.state.error}</div> */}
        </>
      );
    }

    return this.props.children;
  }
}

export default CustomErrorBoundary;
