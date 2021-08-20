"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var ConsoleReports_1 = require("./reportTargets/ConsoleReports");
var HtmlReport_1 = require("./reportTargets/HtmlReport");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.winsReportAndHtml = function (teamName) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(teamName), new HtmlReport_1.HtmlReport());
    };
    Summary.winsReportAndConsole = function (teamName) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(teamName), new ConsoleReports_1.ConsoleReports());
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
