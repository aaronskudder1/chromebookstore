import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface CsvRow {
  [key: string]: string;
}

@Component({
  selector: 'bot-getfile',
  templateUrl: './getfile.component.html',
  styleUrls: ['./getfile.component.css']
})
export class GetfileComponent implements OnInit {
  csvData: CsvRow[] = [];
  csvHeaders: string[] = [];
  csvUrl1 = 'assets/data/test.csv';
  csvUrl2 = 'assets/data/test1.csv';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadAndConcatenateCsv();
  }

  loadAndConcatenateCsv(): void {
    this.http.get(this.csvUrl1, { responseType: 'text' }).subscribe({
      next: (csv1Text) => {
        this.http.get(this.csvUrl2, { responseType: 'text' }).subscribe({
          next: (csv2Text) => {
            const data1 = this.parseCsv(csv1Text, 'test.csv');
            const data2 = this.parseCsv(csv2Text, 'test1.csv');
            this.csvData = [...data1, ...data2];
            
            // Set headers from combined data for display
            if (this.csvData.length > 0) {
              this.csvHeaders = Object.keys(this.csvData[0]);
            }
            
            console.log('Concatenated CSV data:', this.csvData);
          },
          error: (err) => {
            console.error('Failed to load test1.csv', err);
          }
        });
      },
      error: (err) => {
        console.error('Failed to load test.csv', err);
      }
    });
  }

  private parseCsv(csvText: string, source?: string): CsvRow[] {
    const rows = csvText
      .trim()
      .replace(/\r/g, '\n')
      .split('\n')
      .filter((line) => line.trim().length > 0);

    if (!rows.length) {
      return [];
    }

    const headers = rows[0].split(',').map((header) => header.trim());

    return rows.slice(1).map((row) => {
      const values = row.split(',').map((value) => value.trim());
      const record: CsvRow = {};
      headers.forEach((header, index) => {
        record[header] = values[index] ?? '';
      });
      if (source) {
        record['source'] = source;
      }
      return record;
    });
  }
}
