const AuthenticateFriend = (user, friendName) => {
    let friendIsNotSelf = ""
    let friendIsInDatabase = ""
    let friendIsNotFriend = ""
    let otherFriendId = ""
    let errorStatement = ""
    let friendObject=""
    // check to see if the name they input is in the database


    if (user.length) {
        friendIsInDatabase = true;
        otherFriendId = user[0].id

        console.log("friend is in database", friendIsInDatabase, user[0].id)
        // check to make sure they are not trying to add themself



        // If criteria is met, add the friend to the database
        if (friendIsNotSelf === true && friendIsNotFriend === true) {
            console.log("you can make a friend!")
            errorStatement = ""
            friendObject = {
                userId: parseInt(sessionStorage.getItem("activeUser")),
                otherFriendId: otherFriendId
            }

        }
    }
    else {
        errorStatement = `${friendName} is not in the database`

    }
    const thingToReturn = (errorStatement === "" ? friendObject : errorStatement)


    return thingToReturn

    // console.log(friendIsInDatabase, friendIsNotFriend, friendIsNotSelf)
}

export default AuthenticateFriend