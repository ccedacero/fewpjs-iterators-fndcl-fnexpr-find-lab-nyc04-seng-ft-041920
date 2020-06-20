// const testVar = {}
function superbowlWin(arr) {
  let year = undefined;
  (arr.find(w => {
    if (w.result === "W") {
      year = w.year
    }
  })
  );
  return year;
}
