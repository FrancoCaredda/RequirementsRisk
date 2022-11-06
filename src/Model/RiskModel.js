export default function RiskModel(count, constant) {
    this.count = count;
    this.constant = constant;

    this.calculate = () => {
        return this.count * this.constant;
    };
}