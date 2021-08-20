import { MatchData } from "./MatchData";
import { ConsoleReports } from "./reportTargets/ConsoleReports";
import { HtmlReport } from "./reportTargets/HtmlReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";

export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    static winsReportAndHtml(teamName: string): Summary {
        return new Summary(
            new WinsAnalysis(teamName),
            new HtmlReport());
    }
    static winsReportAndConsole(teamName: string): Summary {
        return new Summary(
            new WinsAnalysis(teamName),
            new ConsoleReports());
    }
    constructor(
        public analyzer: Analyzer,
        public outputTarget: OutputTarget) {}

    buildAndPrintReport(matches: MatchData[]): void {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}