class Computer {
    constructor(ramMemory, cpuGHz, hddMemory) {
        this.ramMemory = ramMemory,
            this.cpuGHz = cpuGHz,
            this.hddMemory = hddMemory,
            this.taskManager = [],
            this.installedPrograms = []
    }
    installAProgram(name, requiredSpace) {
        if (this.hddMemory < requiredSpace) {
            throw new Error('There is not enough space on the hard drive')
        } else {
            let obj = {};
            obj.name = name;
            obj.requiredSpace = requiredSpace;
            this.installedPrograms.push(obj);
            this.hddMemory -= requiredSpace;
            return obj;
        }
    }
    uninstallAProgram(name) {
        let foundByName = this.installedPrograms.find(x => x.name == name);
        if (!foundByName) {
            throw new Error('Control panel is not responding');
        } else {
            let index = this.installedPrograms.indexOf(foundByName);
            this.installedPrograms.splice(index, 1);
            let capacity = foundByName.requiredSpace;
            this.hddMemory += capacity;
            return this.installedPrograms;
        }
    }
    openAProgram(name) {
        let foundInInstalled = this.installedPrograms.find(x => x.name == name);
        let foundInTaskMan = this.taskManager.find(x => x.name == name);
        if (!foundInInstalled) {
            throw new Error(`The ${name} is not recognized`);
        }
        if (foundInInstalled && foundInTaskMan) {
            throw new Error(`The ${name} is already open`);
        }
        let programRequiredSpace = Number(foundInInstalled.requiredSpace);
        let currentRamPercentage = (programRequiredSpace / this.ramMemory) * 1.5;
        let currentCPUPercentage = ((programRequiredSpace / this.cpuGHz) / 500) * 1.5;

        let currentTotalRam = 0;
        let currentTotalCPU = 0;
        for (let obj of this.taskManager) {
            currentTotalRam += Number(obj.ramUsage);
            currentTotalCPU +=Number(obj.cpuUsage);
        }
        if ((currentTotalRam + currentRamPercentage >= 100)
            && (currentTotalCPU + currentCPUPercentage >= 100)) {
            throw new Error(`${name} caused out of memory exception`)
        };
        if ((currentTotalRam + currentRamPercentage >= 100)) {
            throw new Error(`${name} caused out of memory exception`)
        };
        if ((currentTotalCPU + currentCPUPercentage >= 100)) {
            throw new Error(`${name} caused out of cpu exception`)
        };
        let obj = {};
        obj.name = name;
        obj.ramUsage = Number(currentRamPercentage);
        obj.cpuUsage = Number(currentCPUPercentage);

        this.taskManager.push(obj);
        return obj;
    }
    taskManagerView(){
        if(this.taskManager.length==0){
            return 'All running smooth so far';
        }else{
            let result=[];
            for (let obj of this.taskManager) {
                result.push(`Name - ${obj.name} | Usage - CPU: ${(Number(obj.cpuUsage)).toFixed(0)}%, RAM: ${(Number(obj.ramUsage)).toFixed(0)}%`);
            }
            return result.join(`\n`);
        }

    }
}
let computer = new Computer(4096, 7.5, 250000);

computer.installAProgram('Word', 7300);
computer.installAProgram('Excel', 10240);
computer.installAProgram('PowerPoint', 12288);
computer.uninstallAProgram('Word');
computer.installAProgram('Solitare', 1500);

computer.openAProgram('Excel');
computer.openAProgram('Solitare');

console.log(computer.installedPrograms);
console.log(('-').repeat(50)) // Separator
console.log(computer.taskManager);
