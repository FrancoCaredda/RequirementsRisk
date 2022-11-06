import React, { useEffect, useState } from "react";
import Table from "./Table";
import listsConfig from "../Model/ListConfig";
import { createTableWithSolution } from "../Model/TableConfig";
import DropList from "./DropList";

let riskSolution = [
    "Попереднє навчання членів проектного колективу",
    "Узгодження детального переліку вимог до ПЗ із замовником",
    "Внесення узгодженого переліку вимог до ПЗ замовника в договір",
    "Точне слідування вимогам замовника з узгодженого переліку вимог до ПЗ",
    "Попередні дослідження ринку",
    "Експертна оцінка програмного проекту досвідченим стороннім консультантом",
    "Консультації досвідченого стороннього консультанта",
    "Тренінг з вивчення необхідних інструментів розроблення ПЗ",
    "Укладання договору страхування",
    "Використання \"шаблонних\" рішень з вдалих попередніх проектів при управлінні програмним проектом",
    "Підготовка документів, які показують важливість даного проекту для досягнення фінансових цілей компанії-розробника",
    "Реорганізація роботи проектного колективу так, щоб обов'язки та робота членів колективу перекривали один одного",
    "Придбання (замовлення) частини компонент розроблюваного ПЗ",
    "Заміна потенційно дефектних компонент розроблюваного ПЗ придбаними компонентами, які гарантують якість виконання роботи",
    "Придбання більш продуктивної бази даних",
    "Використання генератора програмного коду",
    "Реорганізація роботи проектного колективу залежно від рівня труднощів виконання завдань та професійних рівнів розробників",
    "Повторне використання придатних компонент ПЗ, які були розроблені для інших програмних проектів",
    "Аналіз доцільності розроблення даного ПЗ"
];

export default function RiskPlanning() {
    const [table, setTable] = useState(createTableWithSolution(<DropList list={riskSolution}/>));

    return (
        <div id="planning-body">
            <Table  header={["Ризик", "Рішення"]} body={table.tableBody}/>
        </div>
    );
}