export = ReportVisualizationColumns;
declare function ReportVisualizationColumns(): void;
declare class ReportVisualizationColumns {
    items_: Record<string, ReportVisualizationColumn>;
    orderedNames_: string[];
    add(column: ReportVisualizationColumn): void;
    getColumn(name: string): ReportVisualizationColumn;
    toArray(): ReportVisualizationColumn[];
    tryGetColumn(name: string): ReportVisualizationColumn;
    forEach(f: (arg0: ReportVisualizationColumn) => void, opt_obj?: any): void;
    find(f: (arg0: ReportVisualizationColumn) => void, opt_obj?: any): ReportVisualizationColumn;
    getColumnOrder(column: string | ReportVisualizationColumn): number;
}
declare namespace ReportVisualizationColumns {
    function fromArray(arr: ReportVisualizationColumn[]): ReportVisualizationColumns;
}
import ReportVisualizationColumn = require('./ReportVisualizationColumn.js');
