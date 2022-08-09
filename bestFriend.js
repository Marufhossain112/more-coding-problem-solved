function bestFriend(friends) {
  let bestFriend = friends[0];
  let bestFriendLen = bestFriend.length;
  for (let i = 1; i < friends.length; i++) {
    friendsLen = friends[i].length;
    if (bestFriendLen < friendsLen) {
      bestFriend = friends[i];
    }
  }
  return bestFriend;
}
let friends = ["Rofiq", "Shofiq", "Salam", "Borkot", "Alamgir", "Sani", "Omar"];
let result = bestFriend(friends);
console.log(result);
