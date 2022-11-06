import "./Theme/risk-analysis-page.css";
import Table from "./Table";
import { useEffect, useState } from "react";
import RiskProbabilityTable from "../Model/RiskProbabilityTable";
import {createTableData, tableData} from "../Model/TableConfig";

export default function RiskAnalysis() {
    const [table, setTable] = useState(createTableData( (localStorage.getItem("found") != null && localStorage.getItem("found") != false) ? localStorage.getItem("riskSolution") : 1));
    
    const calculateSum = (from, to) => {
        let technicalSum = 0;

        for (let i = from; i < to; i++) {
            technicalSum += parseFloat(table.tableBody[i][11]);
        }

        return technicalSum;
    }

    const calculateRisksProbabilities = (e) => {
        let sum = 0;

        for (let i = 0; i < table.tableBody.length; i++) {
            sum += parseFloat(table.tableBody[i][11]);
        }

        let technicalProbability = calculateSum(0, 12) / sum;
        let costProbability = calculateSum(12, 20) / sum;
        let planningProbability = calculateSum(20, 31) / sum;
        let managementProbability = calculateSum(31, 47) / sum;

        const labels = document.querySelectorAll("div#analysis-body div#probabilities-block-analysis div.body p");

        labels[0].innerText = "Технічні ризики: " + (technicalProbability * 100).toFixed(2) + "%";
        labels[1].innerText = "Планові ризики: " + (planningProbability * 100).toFixed(2) + "%";
        labels[2].innerText = "Ризики управління: " + (managementProbability * 100).toFixed(2) + "%";
        labels[3].innerText = "Вартісні ризики: " + (costProbability * 100).toFixed(2) + "%";

        labels[4].innerText = "Загалом: " + ((technicalProbability + costProbability + planningProbability + managementProbability) * 100).toFixed(2) + "%";
    };

    return (
        <div id="analysis-body">
            <div id="probabilities-block-analysis">
                <div className="caption">
                    <h5>Ймовірність настання події</h5>
                </div>
                <div className="body">
                    <p>Технічні ризики:</p>
                    <p>Планові ризики:</p>
                    <p>Ризики управління:</p>
                    <p>Вартісні ризики:</p>
                    <p>Загалом:</p>
                    <div className="button-container">
                        <button type="button" className="calculate-button btn btn-primary" onClick={calculateRisksProbabilities}>Обрахувати</button>
                        <button type="button" className="btn btn-secondary" onClick={(e) => window.location.reload()}>Оновити</button>
                    </div>
                </div>
            </div>
            <div id="probabilities-table">
                <Table header={table.tableHeader}
                       body={
                            table.tableBody
                       }/>
            </div>
        </div>
    );
}