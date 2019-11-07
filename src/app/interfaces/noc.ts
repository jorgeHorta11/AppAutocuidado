import { Indicator } from './indicator'

export class NOC {
    id: string
    diagnosticId: string
    nocCode: string
    nocName: string
    nocDefinition: string
    indicatorsList: Array<Indicator>
}