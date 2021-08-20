import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

// // Create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv');
// // Create an instance of MatchReader and pass in something to satisfy
// // the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();

const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsReportAndHtml('Man United');
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);




