import fs from "fs";

// <T> type of generic
export abstract class CsvFileReader<T> {
    data: T[] = [];

    constructor(public filename: string) {}

    abstract mapRow(row: string[]): T;

    read(): void {
        this.data = fs.readFileSync(this.filename, {
            encoding: "utf-8"
        })
            .split('\n')
            // place each line in a row
            .map((row: string): string[] => {
                return row.split(',');
            })
            .map(this.mapRow);
    }
}



