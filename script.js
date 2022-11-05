class Goal {
    constructor (name, progress, goal) {
        this.name = name;
        this.progress = progress;
    }

    getProgress() {
        let current = this.progress[this.progress.length-1];
        let start = this.progress[0];
        return current[1] // % done
    }
    setProgress(coord) {
        this.progress.push(coord);
    }
}

let homework = new Goal("7.2 HW", [0, 20]);
homework.setProgress([20, 50])
