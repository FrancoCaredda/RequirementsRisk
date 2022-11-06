import { useEffect, useState } from "react";
import RiskModel from "../Model/RiskModel";
import CheckList from "./CheckList";
import ControlSwitch from "./ControlSwitch";
import "./Theme/risk-identification-page.css";
import listsConfig from "../Model/ListConfig";

export default function RiskIdentification() {
    const [constant, setConstant] = useState(1 / 18);
    const [pageSwitch, setPageSwitch] = useState(false);

    const [technicalRisk, setTechnicalRisk] = useState(new RiskModel(0, constant));
    const [planningRisk, setPlanningRisk] = useState(new RiskModel(0, constant));
    const [costRisk, setCostRisk] = useState(new RiskModel(0, constant));
    const [managementRisk, setManagementRisk] = useState(new RiskModel(0, constant));

    useEffect(() => {
        const probabilitiesLabels = document.querySelector("div#probabilities-block div.body").getElementsByTagName("p");

        if (probabilitiesLabels != null) {
            probabilitiesLabels[0].innerText = "Технічні ризики: " + (technicalRisk.calculate() * 100).toFixed(2) + "%";
            probabilitiesLabels[1].innerText = "Планові ризики: " + (planningRisk.calculate() * 100).toFixed(2) + "%";
            probabilitiesLabels[2].innerText = "Ризики управління: " + (managementRisk.calculate() * 100).toFixed(2) + "%";
            probabilitiesLabels[3].innerText = "Вартісні ризики: " + (costRisk.calculate() * 100).toFixed(2) + "%"; 
            probabilitiesLabels[4].innerText = "Загалом: " + 
            ((technicalRisk.calculate() + costRisk.calculate() + planningRisk.calculate() + managementRisk.calculate()) * 100).toFixed(2) + 
                "%"; 
        }
    }, [technicalRisk, planningRisk, costRisk, managementRisk]);

    const calculateCheckedBoxes = (list) => {
        const checkboxes = list.getElementsByTagName("input");
        let count = 0;

        for (const checkbox of checkboxes) {
            if (checkbox.checked) {
                count++;
            }
        } 

        return count;
    };

    const resetList = (list) => {
        const checkboxes = list.getElementsByTagName("input");

        for (const checkbox of checkboxes) {
            checkbox.checked = false;
        }
    };

    const calculateButtonClick = (e) => {
        const technicalList = document.getElementById("technical-risk-list");
        const costList = document.getElementById("cost-risk-list");
        const planningList = document.getElementById("planning-risk-list");
        const managementList = document.getElementById("management-risk-list");

        setTechnicalRisk(new RiskModel(calculateCheckedBoxes(technicalList), constant));
        setCostRisk(new RiskModel(calculateCheckedBoxes(costList), constant));
        setPlanningRisk(new RiskModel(calculateCheckedBoxes(planningList), constant));
        setManagementRisk(new RiskModel(calculateCheckedBoxes(managementList), constant));
    };

    const resetLists = () => {
        const technicalList = document.getElementById("technical-risk-list");
        const costList = document.getElementById("cost-risk-list");
        const planningList = document.getElementById("planning-risk-list");
        const managementList = document.getElementById("management-risk-list");

        resetList(technicalList);
        resetList(costList);
        resetList(planningList);
        resetList(managementList);
    };

    const pageSwitchClick = (e) => {
        if (!pageSwitch) {
            setConstant(1 / 46);
        } else {
            setConstant(1 / 18);
        }

        resetLists();

        setPageSwitch(!pageSwitch);
    };

    return (
        <div id="risk-identification-body">
            <ControlSwitch text="Потенційні джерела ризиків" click={pageSwitchClick} />
            <div id="probabilities-block">
                <div className="caption">
                    <h5>Ймовірність настання події</h5>
                </div>
                <div className="body">
                    <p>Технічні ризики:</p>
                    <p>Планові ризики:</p>
                    <p>Ризики управління:</p>
                    <p>Вартісні ризики:</p>
                    <p>Загалом:</p>
                    <button type="button" className="calculate-button btn btn-primary" onClick={calculateButtonClick}>Обрахувати</button>
                </div>
            </div>
            <div className="control">
                <div className="risk-block">
                    <h5>Технічні ризики</h5>
                    <CheckList id="technical-risk-list" items={(!pageSwitch) ? listsConfig.technicalList : listsConfig.technicalPotentialRiskList}/>
                </div>
                <div className="risk-block">
                    <h5>Вартісні ризики</h5>
                    <CheckList id="cost-risk-list" items={(!pageSwitch) ? listsConfig.costList : listsConfig.costPotentialRiskList}/>
                </div>
                <div className="risk-block">
                    <h5>Ризики управління</h5>
                    <CheckList id="management-risk-list" items={(!pageSwitch) ? listsConfig.managementList : listsConfig.planningPotentialRiskList}/>
                </div>
                <div className="risk-block">
                    <h5>Планові ризики</h5>
                    <CheckList id="planning-risk-list" items={(!pageSwitch) ? listsConfig.planningList : listsConfig.managementPotentialRiskList}/>
                </div>
            </div>
        </div>
    );
}