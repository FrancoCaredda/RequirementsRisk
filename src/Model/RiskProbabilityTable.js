export default function RiskProbabilityTable(rowCount, columnCount, scale) {
    this.rowCount = rowCount;
    this.columnCount = columnCount;
    this.scale = scale;
    this.data = [];
    this.generate = () => {
        for (let i = 0; i < this.rowCount; i++) {
            let currentData = [];
            let avg = 0;
            
            for (let j = 0; j < this.columnCount; j++) {
                let value = Math.random() * scale;
                currentData.push(value.toFixed(2));
                avg += value;
            }

            avg/=10;
            currentData.push(avg.toFixed(2));

            let lrer = Math.random();
            
            currentData.push(lrer.toFixed(2));

            let vrer = Math.random() * lrer;
            currentData.push(vrer.toFixed(2));

            if (vrer < 0.1) {
                currentData.push("Дуже низький");
            } else if (vrer >= 0.1 && vrer < 0.25) {
                currentData.push("Низький");
            } else if (vrer >= 0.25 && vrer < 0.5) {
                currentData.push("Середній");
            } else if (vrer >= 0.5 && vrer < 0.75) {
                currentData.push("Високий");
            } else {
                currentData.push("Дуже високий");
            }

            this.data.push(currentData);
        }
    };
}