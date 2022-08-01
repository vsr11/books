const ratingCalc = {
  ratingCount: (arr) => {
    return arr[0] + arr[1] + arr[2] + arr[3] + arr[4];
  },

  averageRating: (arr) => {
    if (ratingCalc.ratingCount() === 0) {
      return 0;
    } else {
      return (
        (arr[0] * 5 + arr[1] * 4 + arr[2] * 3 + arr[3] * 2 + arr[4]) /
        (arr[0] + arr[1] + arr[2] + arr[3] + arr[4])
      );
    }
  },
};

export { ratingCalc };
