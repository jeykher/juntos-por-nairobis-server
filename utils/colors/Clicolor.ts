import chalk from "chalk";

class Clicolor {
    log: any;
    constructor() {
        this.log = console.log;
    }
    public infoMessage(message: string | number): void {
        this.log(
            '\n',
            chalk.bgBlueBright.bold("INFO: "),
            chalk.bold(message)
        );
    }
    public warningMessage(message: string | number): void {
        this.log(
            '\n',
            chalk.bgYellowBright.bold("WARNING: "),
            chalk.bold(message)
        );
    }
    public waitingMessage(message: string | number): void {
        this.log(
            '\n',
            chalk.bgMagentaBright.bold("WAITING: "),
            chalk.bold(message)
        );    
    }
    public successMessage(message: string | number): void {
        this.log(
            '\n',
            chalk.bgGreenBright.bold("SUCCESS: "),
            chalk.bold(message)
        );
    }
    public errorMessage(message: string | number): void {
        this.log(
            '\n',
            chalk.bgRedBright.bold("INFO: "),
            chalk.bold(message)
        );
    }
};

const clicolor = new Clicolor();

export default clicolor;
