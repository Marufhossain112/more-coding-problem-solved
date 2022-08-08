let nums = [34, 32, 6, 4, 87, 45, 12, 31];
console.log(nums.slice(3, 7)); /* returns 4,87,45,12 */
console.log(nums); //! slice don't change the original array
console.log(
  nums.splice(1, 3, 75, 99, 45, 65)
); /* returns 32,6,4  and some extra number also has been added */
console.log(nums); //! splice  change the original array
