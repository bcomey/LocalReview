class Goal {
    constructor (name, progress) {
        this.name = name;
        this.start = 0;
        this.end = 100;
        this.progress = progress;
    }

    getProgress() {
        let progress = this.progress[this.progress.length-1]
        return progress[1];
    }
    setProgress(coord) {
        this.progress.push(coord);
    }
}

let homework = new Goal("7.2 HW", [0, 20]);
homework.setProgress([20, 50])
