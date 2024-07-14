const profile = {
	username: "Jacob",
    playTime: 300,


    updatePlayTime(newTime) {
        this.playTime = this.playTime + newTime;
    },

    getInfo() {
        return `Jacob has ${this.playTime} active hours!`
    },

    changeUsername(newName) {
        this.username = newName;
        console.log(this.username);
    },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"