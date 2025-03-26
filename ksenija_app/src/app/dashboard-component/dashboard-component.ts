import { Component } from "@angular/core";

@Component({
    selector: 'dashboard-component',
    templateUrl: './dashboard-component.html',
    styleUrls: ['./dashboard-component.scss']
})
export class DashboardComponent {

    public realTimePriceChart = {
        data: [
            { 
                x: ['10:00', '10:05', '10:10', '10:15', '10:20'], 
                y: [145, 147, 146, 148, 150], 
                type: 'scatter', 
                mode: 'lines+markers', 
                marker: { color: 'green' } 
            }
        ],
        layout: { 
            width: 550, 
            height: 300, 
            title: { text: 'AAPL Real-Time Stock Price', font: { size: 18, color: 'black' } }
        }
    };

    public realTimeVolumeChart = {
        data: [
            { 
                x: ['10:00', '10:05', '10:10', '10:15', '10:20'], 
                y: [2000000, 2500000, 2300000, 2800000, 3000000], 
                type: 'bar', 
                marker: { color: 'blue' } 
            }
        ],
        layout: { 
            title: { text: 'AAPL Real-Time Trading Volume', font: { size: 18, color: 'black' } },
            width: 550, 
            height: 300
        }
    };

    public historicalPriceChart = {
        data: [
            { 
                x: ['2025-03-21', '2025-03-22', '2025-03-23', '2025-03-24', '2025-03-25'], 
                y: [144, 146, 148, 145, 150], 
                type: 'scatter', 
                mode: 'lines+markers', 
                marker: { color: 'orange' } 
            }
        ],
        layout: { 
            width: 550, 
            height: 300, 
            title: { text: 'AAPL Historical Stock Price', font: { size: 18, color: 'black' } }
        }
    };

    public historicalVolumeChart = {
        data: [
            { 
                x: ['2025-03-21', '2025-03-22', '2025-03-23', '2025-03-24', '2025-03-25'], 
                y: [15000000, 16000000, 14000000, 15500000, 16500000], 
                type: 'bar', 
                marker: { color: 'purple' } 
            }
        ],
        layout: { 
            title: { text: 'AAPL Historical Trading Volume', font: { size: 18, color: 'black' } },
            width: 550, 
            height: 300
        }
    };

}
