Meteor.methods({
  'userProfile': function(githubinfo){
    var info = {
      avatar: githubinfo.avatar_url,
      followers: githubinfo.followers
    }
    Meteor.users.update(this.userId,{$set:info})
  }
})
